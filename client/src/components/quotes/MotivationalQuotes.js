import React, { useState, useEffect, useContext } from "react";
import { Context as UserContext } from "../../context/store/UserStore";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import "../../css/MotivationalQuotes.css";

export default function MotivationalQuotes() {
  const [userState] = useContext(UserContext);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };

  const handleClick = () => {
    getQuote();
  };

  return (
    <div className="card">
        <CardContent>
          <p>Welcome back, {userState.user.name}!</p>
          <h2>
            {quote}
          </h2>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {author}
          </Typography>
        </CardContent>
    </div>
  );
}
