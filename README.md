# Crypto App 💹

A modern cryptocurrency dashboard built with **React** and **Recharts**, providing live market data visualization for prices, market caps, and trading volumes.

## 🚀 Features
- Real-time crypto data fetched from an external API
- Dynamic chart rendering with Recharts
- Interactive metric selection (Prices, Market Caps, Total Volumes)
- Responsive modal for coin details
- Clean and modular architecture with `services` and `utils` layers

## 🛠️ Tech Stack
- **React 18**
- **Vite**
- **Recharts**
- **CSS Modules**
- **CoinGecko API** (for market data)

## 📦 Folder Structure
```
src/
├── components/
│   ├── ModalChart/
│   └── Chart/
├── services/        # API requests (cryptoApi.js)
├── utils/           # Data formatting helpers
├── App.jsx
└── main.jsx
```

## ⚙️ Installation
```bash
# Clone the repository
git clone https://github.com/parsaabedi03/crypto-app.git

# Navigate into the project directory
cd crypto-app

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📊 Usage
1. Select a cryptocurrency to view details.
2. Open modal to see interactive charts.
3. Toggle between **Prices**, **Market Caps**, and **Total Volumes**.

## 🧠 Future Improvements
- Add dark/light mode toggle
- Improve performance with React Query or SWR
- Add portfolio tracking feature
- Integrate user authentication

## 👤 Author
**Parsa Abedi**  
📧 [GitHub Profile](https://github.com/parsaabedi03)

---

⭐ **If you like this project, please give it a star on GitHub!**