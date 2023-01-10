const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const dotenv = require("dotenv")
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config()

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection is Successfull!"))
    .catch((err) => {
        console.log(err)
    })

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

PORT = process.env.PORT
app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
})




// const productRoute = require("./routes/product");
// const cartRoute = require("./routes/cart");
// const orderRoute = require("./routes/order");
// const stripeRoute = require("./routes/stripe");
// const cors = require("cors");






// app.use(cors());


// app.use("/api/products", productRoute);
// app.use("/api/carts", cartRoute);
// app.use("/api/orders", orderRoute);
// app.use("/api/checkout", stripeRoute);

