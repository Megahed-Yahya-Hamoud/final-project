import { useEffect, useState } from "react";
import classes from "./internFilter.module.css";

type QueryProps = string;

export type CategoryProps = {
  q: QueryProps;
  country: string;
  salary_gte: number;
  category: string;
};

export default function InternFilter({ setFilterQuery }: any) {
  const [formData, setFormDate] = useState<CategoryProps>({
    q: "",
    country: "",
    salary_gte: 0,
    category: "",
  });
  const [_, setInternShip] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/framework")
      .then(res => res.json())
      .then(data => setInternShip(data));
  }, []);

  function setData(e) {
    setFormDate({ ...formData, [e.target.name]: e.target.value });
  }

  function filterUrl(e) {
    e.preventDefault();
    const query: QueryProps[] = [];
    for (const key in formData) {
      if (formData[key] != "") {
        query.push(`${key}=${formData[key]}`);
      }
    }
    setFilterQuery(query.join("&"));
  }

  return (
    <div>
      <form className={classes.form} onSubmit={filterUrl}>
        <input
          className={classes.input}
          value={formData.q}
          onChange={setData}
          name="q"
          type="text"
          placeholder="Frame work"
        />
        <br />
        <br />
        <input
          className={classes.input}
          value={formData.country}
          onChange={setData}
          name="country"
          type="text"
          placeholder="Location"
        />
        <br />
        <br />
        <input
          className={classes.input}
          value={formData.salary_gte}
          onChange={setData}
          name="salary_gte"
          type="number"
          placeholder="Salary"
        />
        <br />

        <br />
        <input
          className={classes.input}
          type="text"
          onChange={setData}
          name="category"
          placeholder="Category"
          value={formData.category}
        />
        <br />

        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "0px ",
          }}>
          <input
            className={classes.submit}
            onClick={() => {
              setFilterQuery(""),
                setFormDate({
                  q: "",
                  country: "",
                  salary_gte: 0,
                  category: "",
                });
            }}
            type="reset"
            name="reset"
          />
          <input className={classes.submit} type="submit" name="submit" />
        </div>
      </form>
    </div>
  );
}
