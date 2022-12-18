import { useState } from "react";

const Likefunc = () => {
  const [getdata, setdata] = useState([
    {
      id: 1,
      IsActive: false,
      name: "Leanne Graham1",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 2,
      IsActive: false,
      name: "Leanne Graham2",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 3,
      IsActive: false,
      name: "Leanne Graham3",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 4,
      IsActive: false,
      name: "Leanne Graham4",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 5,
      IsActive: false,
      name: "Leanne Graham5",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 6,
      IsActive: false,
      name: "Leanne Graham4",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 7,
      IsActive: false,
      name: "Leanne Graham4",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 8,
      IsActive: false,
      name: "Leanne Graham4",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 9,
      IsActive: false,
      name: "Leanne Graham4",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 10,
      IsActive: false,
      name: "Leanne Graham4",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
  ]);
  const handlelikedislike = (id) => {
    console.log(id);
    setdata((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          if (item.IsActive == true) {
            item.IsActive = false;
          } else {
            item.IsActive = true;
          }
        }
        return item;
      })
    );
  };

  const enable = {
    background: "red",
    color: "white",
    padding: 5,
    border: "none",
    width: 60,
  };
  const disable = {
    background: "blue",
    color: "white",
    padding: 5,
    border: "none",
    width: 60,
  };

  return (
    <>
      <div
        style={{
          marginLeft: 500,
          marginTop: 60,
        }}
      >
        {getdata.map((items) => {
          return (
            <div>
              <div style={{ display: "flex", gap: 147 }}>
                <div>
                  <p>{items.name}</p>
                </div>
                <div style={{ marginTop: 17 }}>
                  <button
                    style={items.IsActive ? enable : disable}
                    onClick={() => handlelikedislike(items.id)}
                  >
                    {items.IsActive ? "Disike" : "Like"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Likefunc;
