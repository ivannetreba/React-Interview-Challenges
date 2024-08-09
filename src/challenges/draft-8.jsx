/////////****/////////

export function Example3() {
  const [firstName, setFirstName] = React.useState(initialState: "");
  const [lastName, setLastName] = React.useState(initialState: "");
  const [email, setBirthday] = React.useState(initialState: "");

  const isSaveButtonDisabled = React.useMemo(factory: () => {
    return !(firstName && lastName && email);
  }, deps: [firstName, lastName, email]);

  return (
    <div className="App">
      {/* Код формы */}
      <button disabled={isSaveButtonDisabled}></button>
    </div>
  );
}

/////////****/////////

export function Example2({ rows, gridTemplateColumns, columnList }) {
  const getGridTemplateColumns = React.useMemo(
    () => gridTemplateColumns ?? `repeat(${columnList.length}, 1fr)`,
    [columnList.length, gridTemplateColumns]
  );

  const gridStyle = {
    gridTemplateColumns: getGridTemplateColumns,
    gridTemplateRows: `repeat(${rows.length}, 1fr)`,
  };

  return (
    <div style={gridStyle} className="App">
      {/* Код приложения */}
    </div>
  );
}

/////////****/////////

export function Example2({ title }) {
  const newTitle = React.useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  return <h1>{newTitle}</h1>;
}

/////////****/////////

export function Example3() {
  const [selectedIds, setSelectedIds] = React.useState(initialState: [1, 5, 9]);

  const label = React.useMemo(() => {
    if (selectedIds) {
      return "Выберите до 3-х разделов";
    } else if (selectedIds) {
      return "Вы можете выбрать еще 2 раздела";
    } else if (selectedIds) {
      return "Вы можете выбрать еще 1 раздел";
    } else {
      return "Выбрано 3 раздела";
    }
  }, [selectedIds]);

  return <div className="App">{label}</div>;
}

