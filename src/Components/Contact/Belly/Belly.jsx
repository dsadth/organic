import React, { useEffect, useState } from "react";

import styles from "../../../styles/Contact/Belly.module.css";

import axios from "axios";

const Belly = () => {
  const [userData, setUserData] = useState([]);
  const [userField, setUserField] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const changeUser = (e) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitChange = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/created",
        userField
      );
      console.log(response.data);

      setUserField({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:3001/ask");
      setUserData(result.data);
    } catch (err) {
      console.error("Error:", err);
    }
  };
  return (
    <div className={styles.belly_contact}>
      <div className={styles.inputs_block}>
        <h1 className={styles.input_label_name}>Full Name*</h1>

        <form>
          <input
            type="text"
            name="name"
            value={userField.name}
            onChange={changeUser}
            placeholder="Name"
          />
          <input
            type="text"
            name="email"
            value={userField.email}
            onChange={changeUser}
            placeholder="Email"
          />
          <input
            type="text"
            name="company"
            value={userField.company}
            onChange={changeUser}
            placeholder="Company"
          />
          <input
            type="text"
            name="subject"
            value={userField.subject}
            onChange={changeUser}
            placeholder="Subject"
          />
          <textarea
            name="message"
            value={userField.message}
            onChange={changeUser}
            placeholder="Message"
          ></textarea>
          <button onClick={onSubmitChange} type="submit">
            Submit
          </button>
        </form>
      </div>

      <button onClick={onSubmitChange} className={styles.button}>
        Send Message
      </button>
    </div>
  );
};

export default Belly;
