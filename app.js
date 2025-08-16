const express = require('express');
const path = require("node:path");
const indexRouter = require('./routes/indexRouter');
const productRouter = require('./routes/productRouter');
const categoryRouter = require('./routes/categoryRouter');
const app = express();
const PORT = process.env.PORT || 3000;


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use("/", indexRouter);
app.use("/product", productRouter);
app.use("/category", categoryRouter);





app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}`);
})