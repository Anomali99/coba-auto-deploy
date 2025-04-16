module.exports = {
  apps: [
    {
      name: "auto-deploy",
      script: "venv/bin/python",
      args: "app.py",
      interpreter: "none",
      env: {
        PORT: 5000,
        FLASK_ENV: "production",
      },
    },
  ],
};
