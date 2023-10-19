const TestDataAddNewPet ={
    
      
        "id": 1,
        "category": {
          "id": 1,
          "name": "dogs"
        },
        "name": "doggie",
        "photoUrls": [
          "https://www.somephoto.com.1#img"
        ],
        "tags": [
          {
            "id": 2,
            "name": "fish"
          }
        ],
        "status": "available"
        
};
const testDataUpdPhoto= {
        
        
    "id": 1,
    "name": "doggie",
  "photoUrls": [
    "https://www.somephoto.com.2#img"
  ]
  };
  const testDataLogin=
    {
        username: 'johndoe4',
        password: 'mypassword',
      };
      const testDataNewUserBody={
        
        id: 0,
        username: 'johndoe4',
        firstName: 'John4',
        lastName: 'Doe',
        email: 'johndoe1@example.com',
        password: 'mypassword',
        phone: '123-456-7890',
        userStatus: 1
      };
      const testDataUserList =
    [
        {
         
          username: 'testuser1',
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          password: 'password123',
          phone: '1234567890',
        },
        {
         
          username: 'testuser2',
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane.smith@example.com',
          password: 'password456',
          phone: '9876543210',
        }
      ];

      const UpdateStatus={
        
          "id": 1,
          "name": "doggieUpdated",
          "status": "soldOut"
            }
      
    