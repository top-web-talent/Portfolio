import React from "react";
import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";

import { skills } from "@modules/Home/config/constanst";

import { fadeTop, motionStep } from "@config/motion";

const Bottom = () => {
  return (
    <motion.div variants={fadeTop} {...motionStep} className="col-span-3">
      <div className="__skills md:pr-56" style={{ marginTop: "50px" }}>
        <ul className="grid grid-cols-1 space-y-2">
          {skills.map((skill) => (
            <div
              style={{
                height: "60px",
                display: "block",
                background: "none",
                borderRadius: "0",
              }}
              key={skill['0']}
            >
              <span
                style={{
                  padding: "0",
                  margin: "0 0 6px 0",
                  textTransform: "uppercase",
                  display: "block",
                  fontWeight: "600",
                  fontFamily: "Poppins, sans-serif",
                  color: "white",
                }}
              >
                {skill[0]}
                <i style={{ float: "right", fontStyle: "normal" }}>{`${skill[1] * 10}%`}</i>
              </span>
              <div style={{ background: "#dce8f8", height: "10px" }}>
                <div
                  style={{
                    height: "10px",
                    transition: "0.9s",
                    backgroundColor: "#149ddd",
                    width: `${skill[1] * 10}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Bottom;
