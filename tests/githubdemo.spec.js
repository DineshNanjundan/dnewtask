// demo file
import { test, expect } from "@playwright/test"
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