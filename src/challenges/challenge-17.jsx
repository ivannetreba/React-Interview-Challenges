// What's wrong with this code?

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState([]);

  return (
    <AppContext.Provider
      value={{ user, setUser, theme, setTheme, notifications, setNotifications }}
    >
      {children}
    </AppContext.Provider>
  );
};
