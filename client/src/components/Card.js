import React, { useState, useEffect } from "react";
import { DatePicker, Form, Input, Modal, Select, Table, message } from "antd";
import axios from "axios";
import Spinner from "./Spinner";

const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cnt, setcnt] = useState(0);

  const showModal = () => {
    setIsModalOpen(true);
  };

  //   const handleOk = (values) => {
  //     console.log("Submitted values:", values); // Log the submitted values
  //     setIsModalOpen(false);
  //   };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [loading, setloading] = useState(false);
  const [alltransactions, setalltransactions] = useState([]);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Reference",
      dataIndex: "reference",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
  ];
  const getAllTransactions = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      setloading(true);
      const res = await axios.post("/transactions/getTransaction", {
        ...values,
        userId: user._id,
      });

      for (var i = 0; i < res.data.transaction.length; i++) {
        res.data.transaction[i].date = res.data.transaction[i].date.slice(
          0,
          10
        );
      }

      setalltransactions(res.data.transaction);

      console.log(res.data.transaction);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
      message.error("There were some issues while importing transaction.");
    }
  };
  const onFinish = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      setloading(true);
      await axios.post("/transactions/addTransaction", {
        ...values,
        userId: user._id,
      });
      setloading(false);
      message.success("Transaction added successfully.");
      setIsModalOpen(false);
      setcnt((cnt) => cnt + 1);
    } catch (error) {
      setloading(false);
      console.log(error);
      message.error("There was some error while transacting.");
    }
  };
  useEffect(() => {
    getAllTransactions();
    console.log("open");
  }, [cnt]);

  return (
    <div>
      {loading && <Spinner />}
      <div className="card Card">
        <div className="card-body">This is some text within a card body.</div>
        <div className="d-flex justify-content-end">
          <button className="button-37" role="button" onClick={showModal}>
            Add new
          </button>
          <Modal
            onFinish={onFinish}
            title="Basic Modal"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
          >
            <Form onFinish={onFinish}>
              <Form.Item label="Amount" name="amount">
                <Input placeholder="Please enter the amount spend" />
              </Form.Item>
              <Form.Item label="Type" name="type">
                <Select>
                  <Select.Option value="Spend">Spend</Select.Option>
                  <Select.Option value="Income">Income</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Category" name="category">
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="DatePicker" name="date">
                <DatePicker />
              </Form.Item>
              <Form.Item label="Reference" name="reference">
                <Input />
              </Form.Item>
              <Form.Item label="Add Description" name="description">
                <Input />
              </Form.Item>
              <div className=" d-flex justify-content-end">
                <button type="submit" className="btn btn-success">
                  ADD
                </button>
              </div>
            </Form>
          </Modal>
        </div>
      </div>
      <div>
        <Table columns={columns} dataSource={alltransactions} />
      </div>
    </div>
  );
};

export default Card;
