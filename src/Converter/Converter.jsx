import { useEffect, useState } from "react";
import styled from "styled-components";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

const StyledConverter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledPadding = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

function Converter() {
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState("");
  const [fromCur, setFromCur] = useState("EUR");
  const [isLoading, setIsLoading] = useState(false);
  const [toCur, setToCur] = useState("USD");

  const getCurrentDateTime = () => {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();

    return `${day}/${month}/${year} - ${hour}:${
      minutes.length > 1 ? minutes : "0" + minutes
    }`;
  };

  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
        );
        const data = await res.json();
        setConverted(data.rates[toCur]);
        setIsLoading(false);
      }
      if (fromCur === toCur) return setConverted(amount);
      convert();
    },
    [amount, fromCur, toCur]
  );

  return (
    <StyledConverter>
      <div>
        <h2>Exchanger with up to date {getCurrentDateTime()}</h2>
        <StyledPadding>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            disabled={isLoading}
          ></input>
          <select
            value={fromCur}
            onChange={(e) => setFromCur(e.target.value)}
            disabled={isLoading}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
            <option value="PLN">PLN</option>
          </select>
          <select
            value={toCur}
            onChange={(e) => setToCur(e.target.value)}
            disabled={isLoading}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
            <option value="PLN">PLN</option>
          </select>
        </StyledPadding>
        <p>
          {converted} {toCur}
        </p>
      </div>
    </StyledConverter>
  );
}

export default Converter;
