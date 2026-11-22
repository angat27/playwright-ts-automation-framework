import { test, expect } from '@playwright/test';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('REST API Verification Suite', () => {
  test('GET - should retrieve user list with valid schema', async ({ request }) => {
    const response = await request.get(`${API_BASE_URL}/users`);
    expect(response.status()).toBe(200);

    const users = await response.json();
    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBeGreaterThan(0);
    expect(users[0]).toHaveProperty('email');
    expect(users[0]).toHaveProperty('username');
  });

  test('POST - should create a new resource and return 201', async ({ request }) => {
    const payload = {
      title: 'Automated QA Test Entry',
      body: 'API validation via Playwright',
      userId: 1,
    };

    const response = await request.post(`${API_BASE_URL}/posts`, {
      data: payload,
    });

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.title).toBe(payload.title);
    expect(body).toHaveProperty('id');
  });

  test('GET - should return 404 for non-existent endpoint', async ({ request }) => {
    const response = await request.get(`${API_BASE_URL}/invalid-endpoint-999`);
    expect(response.status()).toBe(404);
  });
});
