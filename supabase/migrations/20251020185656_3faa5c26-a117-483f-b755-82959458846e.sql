-- Drop existing cart table and recreate with text product_id
DROP TABLE IF EXISTS public.cart CASCADE;

-- Create cart table with text product_id
CREATE TABLE public.cart (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT timezone('utc'::text, now()),
  UNIQUE(user_id, product_id)
);

-- Enable RLS
ALTER TABLE public.cart ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view their own cart" 
ON public.cart 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own cart items" 
ON public.cart 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own cart items" 
ON public.cart 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own cart items" 
ON public.cart 
FOR DELETE 
USING (auth.uid() = user_id);

-- Add trigger for updated_at
CREATE TRIGGER update_cart_updated_at
BEFORE UPDATE ON public.cart
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();