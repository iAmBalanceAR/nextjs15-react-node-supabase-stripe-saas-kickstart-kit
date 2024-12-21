-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
    id UUID REFERENCES auth.users ON DELETE CASCADE,
    email TEXT UNIQUE,
    full_name TEXT,
    avatar_url TEXT,
    billing_address JSONB,
    payment_method JSONB,
    updated_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    PRIMARY KEY (id)
);

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users ON DELETE CASCADE,
    status TEXT,
    price_id TEXT,
    quantity INTEGER,
    cancel_at_period_end BOOLEAN,
    cancel_at TIMESTAMP WITH TIME ZONE,
    canceled_at TIMESTAMP WITH TIME ZONE,
    current_period_start TIMESTAMP WITH TIME ZONE,
    current_period_end TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    ended_at TIMESTAMP WITH TIME ZONE,
    trial_start TIMESTAMP WITH TIME ZONE,
    trial_end TIMESTAMP WITH TIME ZONE,
    stripe_subscription_id TEXT UNIQUE
);

-- Create prices table
CREATE TABLE IF NOT EXISTS prices (
    id TEXT PRIMARY KEY,
    product_id TEXT,
    active BOOLEAN,
    description TEXT,
    unit_amount BIGINT,
    currency TEXT,
    type TEXT,
    interval TEXT,
    interval_count INTEGER,
    trial_period_days INTEGER,
    metadata JSONB
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    active BOOLEAN,
    name TEXT,
    description TEXT,
    image TEXT,
    metadata JSONB
);

-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
    id UUID REFERENCES auth.users ON DELETE CASCADE,
    stripe_customer_id TEXT UNIQUE,
    PRIMARY KEY (id)
);

-- Set up Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Profiles
CREATE POLICY "Public profiles are viewable by everyone." ON profiles
    FOR SELECT USING (true);

CREATE POLICY "Users can update their own profile." ON profiles
    FOR UPDATE USING (auth.uid() = id);

-- Subscriptions
CREATE POLICY "Subscriptions are viewable by users who created them." ON subscriptions
    FOR SELECT USING (auth.uid() = user_id);

-- Prices
CREATE POLICY "Prices are viewable by everyone." ON prices
    FOR SELECT USING (true);

-- Products
CREATE POLICY "Products are viewable by everyone." ON products
    FOR SELECT USING (true);

-- Customers
CREATE POLICY "Customers are viewable by users who own them." ON customers
    FOR SELECT USING (auth.uid() = id);

-- Functions
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name, avatar_url)
    VALUES (
        NEW.id,
        NEW.email,
        NEW.raw_user_meta_data->>'full_name',
        NEW.raw_user_meta_data->>'avatar_url'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user creation
CREATE OR REPLACE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION handle_new_user();

-- Secure schema
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM anon, authenticated;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT INSERT, UPDATE, DELETE ON public.customers TO authenticated;
GRANT INSERT, UPDATE, DELETE ON public.subscriptions TO service_role; 