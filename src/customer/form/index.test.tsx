import React from "react";
import CustomerForm from "./index";

import { mount } from "enzyme";
import toJson from "enzyme-to-json";

const myOnSubmit = jest.fn().mockResolvedValueOnce({});

const fields = {
  firstname: "sam",
  lastname: "raj",
  email: "some@email.com",
  skill: ["react"],
  gender: "male",
};

describe("When the form fields receive a value", () => {
  it("Initial form fields should have the correct value", () => {
    let wrapper = toJson(
      mount(<CustomerForm formvalue={fields} onFinish={myOnSubmit} />)
    );
    expect(wrapper.props.formvalue.firstname).toBe(fields.firstname);
    expect(wrapper.props.formvalue.lastname).toBe(fields.lastname);
    expect(wrapper.props.formvalue.email).toBe(fields.email);
    expect(wrapper.props.formvalue.skill).toBe(fields.skill);
    expect(wrapper.props.formvalue.gender).toBe(fields.gender);
  });
  it("Form submission", async () => {
    let wrapper = mount(
      <CustomerForm formvalue={fields} onFinish={myOnSubmit} />
    );
    wrapper.find("form").simulate("submit");
    await (() => {
      expect(myOnSubmit).toHaveBeenCalledTimes(1);
      expect(myOnSubmit).toHaveBeenCalledWith(fields);
    });
  });

  it("Input firstname change", async () => {
    let wrapper = mount(
      <CustomerForm formvalue={fields} onFinish={myOnSubmit} />
    );
    const input = wrapper.find("input").at(0);
    input.instance().value = "sampath";
    input.simulate("change");

    wrapper.find("form").simulate("submit");
    fields.firstname = "sampath";
    await (() => {
      expect(myOnSubmit).toHaveBeenCalledWith(fields);
    });
  });
  it("Input lastname change", async () => {
    let wrapper = mount(
      <CustomerForm formvalue={fields} onFinish={myOnSubmit} />
    );
    const input = wrapper.find("input").at(1);
    input.instance().value = "k";
    input.simulate("change");

    wrapper.find("form").simulate("submit");
    fields.lastname = "k";
    await (() => {
      expect(myOnSubmit).toHaveBeenCalledWith(fields);
    });
  });
  it("Input email change", async () => {
    let wrapper = mount(
      <CustomerForm formvalue={fields} onFinish={myOnSubmit} />
    );
    const input = wrapper.find("input").at(2);
    input.instance().value = "sampath@gmail";
    input.simulate("change");

    wrapper.find("form").simulate("submit");
    fields.email = "sampath@gmail";
    await (() => {
      expect(myOnSubmit).toHaveBeenCalledWith(fields);
    });
  });
  it("Input gender change", async () => {
    let wrapper = mount(
      <CustomerForm formvalue={fields} onFinish={myOnSubmit} />
    );
    const input = wrapper.find("input").at(4);
    input.instance().value = "female";
    input.simulate("change");

    wrapper.find("form").simulate("submit");
    fields.gender = "female";
    await (() => {
      expect(myOnSubmit).toHaveBeenCalledWith(fields);
    });
  });
});
