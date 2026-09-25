import { test, expect } from "@playwright/test"



  // // 1. GET Request - Fetch a resource
  // test('GET - retrieve a post', async ({ request }) => {
  //   const response = await request.get('https://jsonplaceholder.typicode.com/users');
    
  //   expect(response.status()).toBe(200);
    
  //   const Body = await response.json();
  //   expect(Body).toHaveLength(10);
  //   console.log(Body[3].address.geo.ing);
  // });

//   // 2. POST Request - Create a resource
  //   test('post - retrieve a post', async ({ request }) => {
  //   const response = await request.post('https://jsonplaceholder.typicode.com/users',
  //   {
  //   data: {
  //     name:"Dinesh",
  //     city:"CBE"
  //   }
  //   });
    
  //   expect(response.status()).toBe(201);
    
  //   const Body = await response.json();
  //   console.log(Body);
  //   expect(Body.id).toBe(11);

  // });
  import payload from "..//payload/API.json"
test('validate post - retrieve a post', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/users',
  {
  data: payload
  
  })
  
  expect(response.status()).toBe(201);
  
  const Body = await response.json();
  console.log(Body);
  expect(Body.id).toBe(11);

});

//   // 3. PUT Request - Update/Replace a resource entirely
// import data from "..//data pom/API.json"
// test('post - retrieve a post', async ({ request }) => {
//   const response = await request.post('https://jsonplaceholder.typicode.com/users',
//   {
//   data: {
//     name:"Dinesh",
//     city:"CBE"
//   }
//   });
  
//   expect(response.status()).toBe(201);
  
//   const Body = await response.json();
//   console.log(Body);
//   expect(Body.id).toBe(11);

// });

//   // 4. PATCH Request - Partially update a resource
//   test('PATCH - partially update a post', async ({ request }) => {
//     const partialData = {
//       title: 'Only Title Updated via PATCH',
//     };

//     const response = await request.patch(`${BASE_URL}/posts/1`, {
//       data: partialData,
//     });

//     expect(response.status()).toBe(200);

//     const responseBody = await response.json();
//     console.log('PATCH Response:', responseBody);

//     expect(responseBody.title).toBe(partialData.title);
//     // Other fields like userId or body should still remain as per mock server behavior
//     expect(responseBody).toHaveProperty('id', 1);
//   });

//   // 5. DELETE Request - Delete a resource
//   test('DELETE - delete a post', async ({ request }) => {
//     const response = await request.delete(`${BASE_URL}/posts/1`);

//     // JSONPlaceholder typically returns 200 OK on deletion
//     expect(response.status()).toBe(200);
    
//     console.log('DELETE Response status:', response.status());
//   });

// });