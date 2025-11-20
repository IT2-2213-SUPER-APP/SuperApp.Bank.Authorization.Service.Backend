import { useState } from "react";

export default function Bank() {
  const [balance, setBalance] = useState(5000);
  const [cards, setCards] = useState([
    { id: 1, name: "Kaspi Gold", color: "#f2b705", number: "4000 1234 5678 9010", balance: 3500 },
    { id: 2, name: "Kaspi Red", color: "#e63946", number: "4000 9876 5432 1098", balance: 1500 },
  ]);
  const [deposits, setDeposits] = useState([]);

  const handleCreateCard = () => {
    const newCard = {
      id: Date.now(),
      name: "Kaspi New",
      color: "#4a90e2",
      number: `4000 ${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(
        1000 + Math.random() * 9000
      )} ${Math.floor(1000 + Math.random() * 9000)}`,
      balance: 0,
    };
    setCards([...cards, newCard]);
    alert("Карта успешно создана 💳");
  };

  const handleOpenDeposit = () => {
    const depositAmount = prompt("Введите сумму депозита:");
    if (depositAmount && !isNaN(depositAmount)) {
      const newDeposit = { id: deposits.length + 1, amount: Number(depositAmount) };
      setDeposits([...deposits, newDeposit]);
      setBalance(balance - depositAmount);
      alert("Депозит успешно открыт 🏦");
    }
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "'Inter', sans-serif", color: "#333" }}>
      <h1 style={{ color: "#1a73e8", marginBottom: "10px", fontSize: "32px" }}>Kaspi Банк</h1>
      <p style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "25px" }}>
        Общий баланс: {balance.toLocaleString()} ₸
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          width: "250px",
          margin: "0 auto 30px",
        }}
      >
        <button style={buttonStyle} onClick={handleCreateCard}>
          💳 Создать карту
        </button>
        <button style={buttonStyle} onClick={handleOpenDeposit}>
          🏦 Открыть депозит
        </button>
      </div>

      <div style={{ width: "290px", margin: "0 auto", textAlign: "left" }}>
        <h3 style={{ color: "#1a73e8", fontSize: "20px" }}>Ваши карты:</h3>
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              background: "#f8f9fa",
              borderLeft: `6px solid ${card.color}`,
              borderRadius: "10px",
              padding: "12px 15px",
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "16px",
              boxShadow: "0 3px 8px rgba(0,0,0,0.05)",
            }}
          >
            <div>
              <strong>{card.name}</strong>
              <p style={{ margin: 0, color: "#777", fontSize: "13px" }}>{card.number}</p>
            </div>
            <div style={{ fontWeight: "bold" }}>{card.balance.toLocaleString()} ₸</div>
          </div>
        ))}

        {deposits.length > 0 && (
          <div style={{ marginTop: "25px" }}>
            <h3 style={{ color: "#1a73e8", fontSize: "20px" }}>Ваши депозиты:</h3>
            {deposits.map((dep) => (
              <div
                key={dep.id}
                style={{
                  background: "#f8f9fa",
                  borderLeft: "6px solid #f2b705",
                  borderRadius: "10px",
                  padding: "12px 15px",
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "16px",
                  boxShadow: "0 3px 8px rgba(0,0,0,0.05)",
                }}
              >
                <div>Депозит #{dep.id}</div>
                <div style={{ fontWeight: "bold" }}>{dep.amount.toLocaleString()} ₸</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const buttonStyle = {
  width: "100%",
  background: "#1a73e8",
  color: "white",
  border: "none",
  padding: "12px 0",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
  transition: "0.3s",
};
