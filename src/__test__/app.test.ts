import request from 'supertest';
import app from '../app'; // Importa o aplicativo Express

describe('GET /', () => {
    test('deve retornar Unifio Nodejs API', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Unifio Nodejs API - now using ts');
    });

    test('chamada errada de api', async () => {
        const response = await request(app).get('/profil');
        expect(response.status).toBe(404);
    });

    test('deve retornar todos os profiles', async () => {
        const response = await request(app).get('/profiles');
        expect(response.status).toBe(200);
    });

    test('deve retornar o saldo do profile de id 1', async () => {
        const response = await request(app).get('/profiles/balance/1');
        expect(response.status).toBe(200);
        expect(response.body.balance).toBe(1300);
    });

    test('deposito valido', async () => {
        const response = await request(app)
            .post('/deposits/profiles/2')
            .send({ "depositValue": 200 });
        expect(response.status).toBe(201);
    });

    test('deve retornar deposito invalido', async () => {
        const response = await request(app)
            .post('/deposits/profiles/2')
            .send({ "depositValue": -200 });
        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Deposit amount must be positive');
    });

});