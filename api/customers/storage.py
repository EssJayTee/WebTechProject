from functools import lru_cache

from .schema import Customer, Product, Order

CustomerStorageType = dict[int, Customer]
ProductsStorageType = dict[int, Product]
OrdersStorageType = dict[int, Order]

# Dodałem kilku przykładowych customerów na potrzeby zaprezentowania zamówień (3 na 5 zamówień będzie od razu widoczna z tymi customerami)
CUSTOMERS: CustomerStorageType = {
    0: Customer(name="Łukasz", 
                surname="Stanisławowski", 
                email="testoviron@yahoo.com", 
                phone_number="999-888-777", 
                id=0),
    1: Customer(name="Kamil", 
                surname="Tumulec", 
                email="legiamistrzem@wp.pl", 
                phone_number="213-769-420", 
                id=1),
    2: Customer(name="Marcin", 
                surname="Jankowski", 
                email="smurf@poczta.fm", 
                phone_number="567-890-123", 
                id=2),
}

PRODUCTS: ProductsStorageType = {
    0: Product(name="Single Serve Coffee Maker",
               id=0, 
               price=39.0, 
               brand="Keurig", 
               description="A compact and convenient single serve coffee maker for brewing a quick cup of coffee.",
               color= "Black", 
               material= "Plastic"),
    1: Product(name="French Press Coffee Maker",
               id=1, 
               price=29.0, 
               brand="Bodum", 
               description="A classic French press coffee maker for brewing rich and flavorful coffee.",
               color= "Silver", 
               material= "Stainless steel"),
    2: Product(name="Drip Coffee Maker",
               id=2, 
               price=49.0, 
               brand="Mr. Coffee", 
               description="A reliable and easy-to-use drip coffee maker for brewing delicious coffee at home.",
               color= "Black", 
               material= "Plastic"),
    3: Product(name="Espresso Machine",
               id=3, 
               price=199.0, 
               brand="DeLonghi", 
               description="A high-quality espresso machine for brewing rich and creamy espresso at home.",
               color= "Gold", 
               material= "Stainless steel"),
    4: Product(name="Single Serve Coffee Maker",
               id=4, 
               price=39.0, 
               brand="Keurig", 
               description="A compact and convenient single serve coffee maker for brewing a quick cup of coffee.",
               color= "Black", 
               material= "Plastic"),
    5: Product(name="Pour Over Coffee Maker",
               id=5, 
               price=19.0, 
               brand="Hario", 
               description="A simple and elegant pour over coffee maker for brewing smooth and flavorful coffee.",
               color= "Clear", 
               material= "Glass"),
    6: Product(name="Cold Brew Coffee Maker",
               id=6, 
               price=29.0, 
               brand="Takeya", 
               description="A convenient and easy-to-use cold brew coffee maker for brewing smooth and refreshing cold brew coffee at home.",
               color= "Dark green", 
               material= "Plastic"),
}

ORDERS: OrdersStorageType = {
    0: Order(
        order_id=0,
        products_to_order=[5],
        customer_id=0,
    ),
    1: Order(
        order_id=1,
        products_to_order=[1],
        customer_id=1,
    ),
    2: Order(
        order_id=2,
        products_to_order=[3,6],
        customer_id=2,
    ),
    3: Order(
        order_id=3,
        products_to_order=[4],
        customer_id=3,
    ),
    4: Order(
        order_id=4,
        products_to_order=[2],
        customer_id=4,
    ),
}

@lru_cache(maxsize=1)
def get_customers_storage() -> CustomerStorageType:
    return CUSTOMERS

@lru_cache(maxsize=1)
def get_products_storage() -> ProductsStorageType:
    return PRODUCTS

@lru_cache(maxsize=1)
def get_orders_storage() -> OrdersStorageType:
    return ORDERS
