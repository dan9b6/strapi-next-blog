module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ca95998be067a7ba5fa3c4cb8ca83fe7'),
  },
});
