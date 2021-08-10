const mongoose = require('mongoose')

const db = require("../models");
const Role = db.role;

mongoose
    .connect('mongodb://localhost:27017/miets_db', { useNewUrlParser: true })
    .then(() => {
        console.log('Successfully connected to MongoDB');
        initial();
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}