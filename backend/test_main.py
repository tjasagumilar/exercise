from fastapi.testclient import TestClient
from main import app 

client = TestClient(app)

def test_get_users():
    response = client.get("/users")
    assert response.status_code == 200
    assert isinstance(response.json(), list) 
    assert len(response.json()) > 0 

def test_get_single_user():
    user_id = 1 
    response = client.get(f"/users/{user_id}")
    assert response.status_code == 200
    assert response.json() == {
        "id": user_id,
        "firstName": "John Doe",
        "lastName": "Doe",
        "age": 30,
        "gender": "male",
        "email": "john@doe.com",
        "phone": "123-456-7890",
    }

def test_update_user():
    updated_user_data = {
        "firstName": "Updated",
        "lastName": "User",
        "age": 25,
        "gender": "female",
        "email": "updated@example.com",
        "phone": "987-654-3210"
    }

    response = client.put("/users/1", json=updated_user_data)
    assert response.status_code == 200
    assert response.json()["firstName"] == "Updated"