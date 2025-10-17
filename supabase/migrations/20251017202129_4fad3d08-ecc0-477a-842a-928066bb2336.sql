-- Fix function search path security issue
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::TEXT, NOW());
    RETURN NEW;
END;
$$;