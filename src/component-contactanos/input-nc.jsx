import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import { Button } from "@nextui-org/react"
import './contacto-nc.css'
import { motion, AnimatePresence} from 'framer-motion'

export default function InputS() {
    const [n_minecraft, SetN_minecraft] = useState('');
    const [n_discord, SetN_discord] = useState('');
    const [n_real, SetN_real] = useState('');
    const [a_real, SetA_real] = useState('');
    const [message, SetMessage] = useState('');

    {/* STATES OF SENDING */}

    const [sent, setSent] = useState(false);


  return (
    <div className="form-parent">
        <div className="form-input-all">
            <div className="form-sng">
                <input className="w-full p-2 text-xs input-v 	
                "type="text" placeholder="Nombre" 
                    onChange={(e) => {
                        SetN_real(e.target.value)
                    }}
                />

                <input className="w-full p-2 input-v" 
                type="text" placeholder="Apellido"
                onChange={(e) => {
                    SetA_real(e.target.value);
                }}
                />
            </div>

            <div className="form-sng">
                <input type="text" className="w-full p-2 input-v" 
                placeholder="Usuario de Minecraft"
                onChange={(e) => {
                    SetN_minecraft(e.target.value);
                }}
                />
                
                <input type="text" className="w-full p-2 input-v" 
                placeholder="Usuarios de Discord" 
                onChange={(e) => {
                    SetN_discord(e.target.value);
                }}/>
            </div>
        </div>

        <div className="form-textarea-nc">
            <textarea className="n-textarea"
            onChange={(e) => {
                SetMessage(e.target.value);
            }}

            />
            {sent === true ? <AnimatePresence>
                                <motion.div className="flex justify-center items-center gap-2 nc-block" animate={{ x: 0, opacity: 1 }} initial={{x: -50, opacity: -100 }} transition={{ duration: 0.1}} exit={{ x: 50, opacity: 0 }} key="modal">
                                    <img src="block-nc.svg" alt="Img Block" />
                                    <p>Todos los campos son necesarios!</p>
                                </motion.div>
                            </AnimatePresence> : ""}
            <Button className="btn-form" onClick={() => {sendEmail();}}>Enviar</Button>
        </div>

    </div>
  );
}
