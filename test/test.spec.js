const{
  sendRequest
}= require("../helpers/api.helper");

const testDataNewUserBody= require("../helpers/api.helper");
const testDataLogin= require("../helpers/api.helper");
const testDataUserList =require("../helpers/api.helper");
const TestDataAddNewPet=require("../helpers/api.helper");
const testDataUpdPhoto=require("../helpers/api.helper");
const UpdateStatus=require("../helpers/api.helper");

const chai = require('chai');
const { expect } = chai; 
chai.should(); 



describe("API TEST Suite",()=>{
 
  
    it('should create a new user', async () => {
      const response = await sendRequest('user',testDataNewUserBody,"post");

       console.log(response.status); 
      expect(response.status).to.equal(200); 
       
      });
        
      it("login as a User", async () => {
        const response = await sendRequest('user/login',testDataLogin , "get");

       expect(response.status).to.equal(200); 
      console.log(response.status); 
    });
    
    it('should create a users list', async () => {
    
    const response = await sendRequest('/user/createWithList',testDataUserList, 'post');
    
      console.log(response.status);
      expect(response.status).to.equal(200); 
    });


    it("logout", async () => {
     const response = await sendRequest('user/logout', "get");

    expect(response.status).to.equal(200); 
    console.log(response.status); 
  });
    
  it('adding a new Pet', async () => {
    const response = await sendRequest('pet',TestDataAddNewPet,"post");

     console.log(response.status); 
    expect(response.status).to.equal(200); 
   
      
    });

    it('updating Pets image', async () => {
      const response = await sendRequest('pet',testDataUpdPhoto,"put");
  
       console.log(response.status); 
      expect(response.status).to.equal(200); 
     
        
      });

      it('updating Pets name and status', async () => {
        const response = await sendRequest('pet',UpdateStatus,"put");
    
         console.log(response.status); 
        expect(response.status).to.equal(200); 
       
          
        });


        it('deleting Pet', async () => {
          const response = await sendRequest('pet/1',"delete");
      
          console.log(response.status); 
          expect(response.status).to.equal(200); 
         
            
          });
  

});