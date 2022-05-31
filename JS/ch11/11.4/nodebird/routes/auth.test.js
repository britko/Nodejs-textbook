const request = require('supertest');
const { sequelize } = require('../models');
const app = require('../app');

beforeAll(async () => {
    await sequelize.sync()
})

describe('POST /join', () => {
    test('로그인 안 했으면 가입', (done) => {
        request(app)
            .post('/auth/join')
            .send({
                email: 'abc@gmail.com',
                nick: 'abc',
                password: 'nodejsbook',
            })
            .expect('Location', '/')
            .expect(302, done)
    })
})

describe('POST /login', () => {
    const agent = request.agent(app)
    beforeEach((done) => {
        agent
            .post('/auth/login')
            .send({
                email: 'abc@gmail.com',
                password: 'nodejsbook',
            })
            .end(done)
    })

    test('이미 로그인했으면 redirect /', (done) => {
        const message = encodeURIComponent('로그인한 상태입니다.')
        agent
            .post('/auth/join')
            .send({
                email: 'abc@gmail.com',
                nick: 'abc',
                password: 'nodejsbook',
            })
            .expect('Location', `/?error=${message}`)
            .expect(302, done)
    })
})