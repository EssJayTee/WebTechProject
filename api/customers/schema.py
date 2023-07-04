from pydantic import BaseModel

class CustomerCreateSchema(BaseModel):
    name: str
    surname: str
    email: str
    phone_number: str

    class Config:
        schema_extra = {
            "example": {
                "name": "Norbert",
                "surname": "Gierczak",
                "email": "matirybaraki@gmail.com",
                "phone_number": "133 742 069",
            }
        }


class CustomerUpdateSchema(BaseModel):
    name: str | None
    surname: str | None
    email: str | None
    phone_number: str | None

    class Config:
        schema_extra = {
            "example": {
                "name": "Norbert",
                "surname": "Gierczak"
            }
        }


class Customer(CustomerCreateSchema):
    id: int


class ProductCreateSchema(BaseModel):
    name: str
    price: float
    brand: str
    description: str
    color: str
    material: str

    class Config:
        schema_extra = {
            "example": {
                "name": "Coffee Express 024",
                "price": 69.0,
                "brand": "KawaKafka",
                "description": "Najlepszy ekspres do kawy na świecie!",
                "color": "Brązowy",
                "material": "Mosiądz",
            }
        }


class Product(ProductCreateSchema):
    id: int


class OrderCreateSchema(BaseModel):
    customer_id: int
    products_to_order: list[int]

    class Config:
        schema_extra = {
            "example": {
                "customer_id": 4,
                "products_to_order": [2, 0],
            }
        }


class Order(OrderCreateSchema):
    order_id: int