const products = [
  // WOMEN - Blazers & Coats
  { id: 1, name: 'Oversized Blazer', price: '€89.99', category: 'Women', type: 'Blazers', collection: 'Spring 2025', cut: 'Oversized', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600', description: 'A relaxed oversized blazer in premium wool blend.', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: 2, name: 'Wool Coat', price: '€129.99', category: 'Women', type: 'Coats', collection: 'Winter 2024', cut: 'Regular', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600', description: 'Classic wool coat with a structured silhouette.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 3, name: 'Cropped Blazer', price: '€79.99', category: 'Women', type: 'Blazers', collection: 'Spring 2025', cut: 'Cropped', image: 'https://images.unsplash.com/photo-1548624313-0396a42b4f71?w=600', description: 'Chic cropped blazer for a modern silhouette.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 4, name: 'Trench Coat', price: '€149.99', category: 'Women', type: 'Coats', collection: 'Spring 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1520012218364-3dbe622b7f20?w=600', description: 'Timeless trench coat in water-resistant fabric.', sizes: ['XS', 'S', 'M', 'L', 'XL'] },

  // WOMEN - Tops & Shirts
  { id: 5, name: 'Silk Blouse', price: '€49.99', category: 'Women', type: 'Tops', collection: 'Spring 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600', description: 'Lightweight silk blouse with a relaxed fit.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 6, name: 'Linen Shirt', price: '€39.99', category: 'Women', type: 'Shirts', collection: 'Summer 2025', cut: 'Oversized', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600', description: 'Breathable linen shirt for warm weather.', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: 7, name: 'Knit Top', price: '€34.99', category: 'Women', type: 'Tops', collection: 'Winter 2024', cut: 'Slim', image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600', description: 'Cozy knit top in soft merino wool.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 8, name: 'Cotton Tee', price: '€24.99', category: 'Women', type: 'Tops', collection: 'Summer 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600', description: 'Essential cotton tee in a relaxed fit.', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: 9, name: 'Satin Camisole', price: '€29.99', category: 'Women', type: 'Tops', collection: 'Spring 2025', cut: 'Slim', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600', description: 'Elegant satin camisole for day or night.', sizes: ['XS', 'S', 'M', 'L'] },

  // WOMEN - Bottoms
  { id: 10, name: 'Slim Trousers', price: '€49.99', category: 'Women', type: 'Trousers', collection: 'Spring 2025', cut: 'Slim', image: 'https://images.unsplash.com/photo-1551163943-3f7253a97e56?w=600', description: 'Tailored slim trousers with a high waist silhouette.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 11, name: 'Midi Skirt', price: '€44.99', category: 'Women', type: 'Skirts', collection: 'Spring 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600', description: 'Flowing midi skirt with a subtle slit.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 12, name: 'Wide Leg Pants', price: '€59.99', category: 'Women', type: 'Trousers', collection: 'Spring 2025', cut: 'Wide', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4f7c?w=600', description: 'Elegant wide leg pants in flowing fabric.', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: 13, name: 'Mini Skirt', price: '€34.99', category: 'Women', type: 'Skirts', collection: 'Summer 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600', description: 'Chic mini skirt in soft fabric.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 14, name: 'Tailored Shorts', price: '€39.99', category: 'Women', type: 'Shorts', collection: 'Summer 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=600', description: 'Smart tailored shorts for warm days.', sizes: ['XS', 'S', 'M', 'L'] },

  // WOMEN - Dresses
  { id: 15, name: 'Linen Dress', price: '€69.99', category: 'Women', type: 'Dresses', collection: 'Summer 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600', description: 'Effortless linen dress for summer days.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 16, name: 'Wrap Dress', price: '€79.99', category: 'Women', type: 'Dresses', collection: 'Spring 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=600', description: 'Classic wrap dress in a flattering silhouette.', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: 17, name: 'Slip Dress', price: '€59.99', category: 'Women', type: 'Dresses', collection: 'Summer 2025', cut: 'Slim', image: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=600', description: 'Minimal slip dress in satin finish.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 18, name: 'Knit Dress', price: '€89.99', category: 'Women', type: 'Dresses', collection: 'Winter 2024', cut: 'Slim', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600', description: 'Cozy knit dress for colder months.', sizes: ['XS', 'S', 'M', 'L'] },

  // WOMEN - Knitwear
  { id: 19, name: 'Cashmere Sweater', price: '€99.99', category: 'Women', type: 'Knitwear', collection: 'Winter 2024', cut: 'Regular', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600', description: 'Luxurious cashmere sweater in a relaxed fit.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 20, name: 'Ribbed Cardigan', price: '€69.99', category: 'Women', type: 'Knitwear', collection: 'Winter 2024', cut: 'Regular', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600', description: 'Ribbed cardigan with a relaxed open front.', sizes: ['XS', 'S', 'M', 'L', 'XL'] },

  // WOMEN - Sale
  { id: 21, name: 'Printed Blouse', price: '€19.99', category: 'Sale', type: 'Tops', collection: 'Winter 2024', cut: 'Regular', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600', description: 'Printed blouse now on sale.', sizes: ['XS', 'S', 'M'] },
  { id: 22, name: 'Pleated Skirt', price: '€24.99', category: 'Sale', type: 'Skirts', collection: 'Winter 2024', cut: 'Regular', image: 'https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=600', description: 'Pleated midi skirt now on sale.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 23, name: 'Puffer Jacket', price: '€59.99', category: 'Sale', type: 'Coats', collection: 'Winter 2024', cut: 'Oversized', image: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=600', description: 'Warm puffer jacket now on sale.', sizes: ['S', 'M', 'L', 'XL'] },

  // MEN - Shirts & Tops
  { id: 24, name: 'Linen Shirt', price: '€39.99', category: 'Men', type: 'Shirts', collection: 'Summer 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600', description: 'Lightweight linen shirt with a relaxed fit.', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
  { id: 25, name: 'Oxford Shirt', price: '€44.99', category: 'Men', type: 'Shirts', collection: 'Spring 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600', description: 'Classic oxford shirt in soft cotton.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 26, name: 'Striped Tee', price: '€24.99', category: 'Men', type: 'Tops', collection: 'Summer 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600', description: 'Classic striped tee in cotton jersey.', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
  { id: 27, name: 'Polo Shirt', price: '€34.99', category: 'Men', type: 'Tops', collection: 'Summer 2025', cut: 'Slim', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600', description: 'Smart polo shirt in breathable pique fabric.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 28, name: 'Knit Sweater', price: '€59.99', category: 'Men', type: 'Knitwear', collection: 'Winter 2024', cut: 'Regular', image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600', description: 'Soft knit sweater in wool blend.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 29, name: 'Turtleneck', price: '€49.99', category: 'Men', type: 'Knitwear', collection: 'Winter 2024', cut: 'Slim', image: 'https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=600', description: 'Slim fit turtleneck in merino wool.', sizes: ['S', 'M', 'L', 'XL'] },

  // MEN - Bottoms
  { id: 30, name: 'Slim Chinos', price: '€49.99', category: 'Men', type: 'Trousers', collection: 'Spring 2025', cut: 'Slim', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600', description: 'Smart slim chinos in stretch cotton.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 31, name: 'Wide Trousers', price: '€59.99', category: 'Men', type: 'Trousers', collection: 'Spring 2025', cut: 'Wide', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600', description: 'Relaxed wide leg trousers in linen blend.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 32, name: 'Denim Jeans', price: '€54.99', category: 'Men', type: 'Jeans', collection: 'Spring 2025', cut: 'Slim', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600', description: 'Classic slim fit denim jeans.', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
  { id: 33, name: 'Cargo Shorts', price: '€39.99', category: 'Men', type: 'Shorts', collection: 'Summer 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=600', description: 'Casual cargo shorts for summer.', sizes: ['S', 'M', 'L', 'XL'] },

  // MEN - Outerwear
  { id: 34, name: 'Wool Blazer', price: '€109.99', category: 'Men', type: 'Blazers', collection: 'Winter 2024', cut: 'Regular', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600', description: 'Sharp wool blazer for formal occasions.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 35, name: 'Overcoat', price: '€159.99', category: 'Men', type: 'Coats', collection: 'Winter 2024', cut: 'Regular', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=600', description: 'Elegant overcoat in premium wool.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 36, name: 'Bomber Jacket', price: '€89.99', category: 'Men', type: 'Jackets', collection: 'Spring 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600', description: 'Classic bomber jacket in satin finish.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 37, name: 'Denim Jacket', price: '€69.99', category: 'Men', type: 'Jackets', collection: 'Spring 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600', description: 'Timeless denim jacket in washed cotton.', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },

  // MEN - Sale
  { id: 38, name: 'Linen Trousers', price: '€29.99', category: 'Sale', type: 'Trousers', collection: 'Summer 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=600', description: 'Lightweight linen trousers now on sale.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 39, name: 'Cotton Hoodie', price: '€34.99', category: 'Sale', type: 'Tops', collection: 'Winter 2024', cut: 'Oversized', image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600', description: 'Cozy cotton hoodie now on sale.', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
  { id: 40, name: 'Wool Scarf', price: '€14.99', category: 'Sale', type: 'Accessories', collection: 'Winter 2024', cut: 'Regular', image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600', description: 'Warm wool scarf now on sale.', sizes: ['One Size'] },

  // NEW ARRIVALS - Women
  { id: 41, name: 'Organza Blouse', price: '€54.99', category: 'Women', type: 'Tops', collection: 'Spring 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1594938374182-a57ad3b4cf4f?w=600', description: 'Delicate organza blouse with subtle sheen.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 42, name: 'Pleated Trousers', price: '€64.99', category: 'Women', type: 'Trousers', collection: 'Spring 2025', cut: 'Wide', image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=600', description: 'Elegant pleated trousers in soft fabric.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 43, name: 'Blazer Dress', price: '€94.99', category: 'Women', type: 'Dresses', collection: 'Spring 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600', description: 'Modern blazer dress for a powerful look.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 44, name: 'Cargo Pants', price: '€54.99', category: 'Women', type: 'Trousers', collection: 'Spring 2025', cut: 'Wide', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600', description: 'Trendy cargo pants with multiple pockets.', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: 45, name: 'Maxi Dress', price: '€84.99', category: 'Women', type: 'Dresses', collection: 'Summer 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600', description: 'Flowing maxi dress for effortless style.', sizes: ['XS', 'S', 'M', 'L'] },

  // NEW ARRIVALS - Men
  { id: 46, name: 'Overshirt', price: '€64.99', category: 'Men', type: 'Shirts', collection: 'Spring 2025', cut: 'Oversized', image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=600', description: 'Relaxed overshirt in heavy cotton.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 47, name: 'Jogger Pants', price: '€44.99', category: 'Men', type: 'Trousers', collection: 'Spring 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600', description: 'Comfortable jogger pants in soft fabric.', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
  { id: 48, name: 'Linen Suit Jacket', price: '€119.99', category: 'Men', type: 'Blazers', collection: 'Summer 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600', description: 'Light linen suit jacket for warm occasions.', sizes: ['S', 'M', 'L', 'XL'] },

  // MORE SALE
  { id: 49, name: 'Wrap Skirt', price: '€22.99', category: 'Sale', type: 'Skirts', collection: 'Spring 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1570976447640-ac859083963f?w=600', description: 'Classic wrap skirt now on sale.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 50, name: 'Knit Vest', price: '€27.99', category: 'Sale', type: 'Knitwear', collection: 'Winter 2024', cut: 'Regular', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600', description: 'Stylish knit vest now on sale.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 51, name: 'Canvas Tote', price: '€17.99', category: 'Sale', type: 'Accessories', collection: 'Summer 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600', description: 'Everyday canvas tote now on sale.', sizes: ['One Size'] },
  { id: 52, name: 'Printed Shorts', price: '€19.99', category: 'Sale', type: 'Shorts', collection: 'Summer 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1565084888279-aca607bb7da2?w=600', description: 'Fun printed shorts now on sale.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 53, name: 'Denim Skirt', price: '€26.99', category: 'Sale', type: 'Skirts', collection: 'Spring 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1582142839970-2b9e04b60f65?w=600', description: 'Classic denim skirt now on sale.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 54, name: 'Striped Shirt', price: '€21.99', category: 'Sale', type: 'Shirts', collection: 'Summer 2025', cut: 'Regular', image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600', description: 'Classic striped shirt now on sale.', sizes: ['S', 'M', 'L', 'XL'] },
]

export default products