from typing import Union
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from users import get_users as return_users

app = FastAPI()

users = return_users()

class UserData(BaseModel):
    firstName: str
    lastName: str
    age: int
    gender: str
    email: str
    phone: str

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/users")
def get_users():
    return users

@app.put("/users/{id}")
def update_user(id: int, user_data: UserData):
    for user in users:
        if user["id"] == id:
            user.update(user_data.model_dump())
            return user
    raise HTTPException(status_code=404, detail="User not found")