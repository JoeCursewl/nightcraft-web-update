import React from "react";
import './modal-nc-info.css'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function FooterModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button className="btn-modal" onPress={onOpen}>&copy; 2024 NightcraftMC</Button>
      <Modal 
        backdrop="blur" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20 ft-modal-nc-2"
        }}
      >
        <ModalContent className="ft-modal-nc">
          {(onClose) => (
            <>
              <ModalHeader className="flex gap-3 ft-modal-nc">
                <div className="img-nc-modal">
                    <img src="/logo.webp" alt="Nightcraft Logo File Webp" />
                </div>
                NightcraftMC | Información
                </ModalHeader>
              <ModalBody className="ft-modal-nc">
                <p> 
                Los presentes <span className="sc">términos</span> y <span className="sc">condiciones</span> regulan el uso de la <span className="nc">tienda</span> en línea de 
                <span className="nc"> NightcraftMC</span> para la venta de rangos en su servidor de Minecraft. 
                Al realizar una compra en esta tienda, 
                usted acepta los <span className="sc">términos y condiciones</span> aquí establecidos.
                </p>

                <p>
                Si tiene alguna <span className="sc">pregunta</span> o comentario sobre estos <span className="sc">Términos y Condiciones</span>, 
                puede ponerse en contacto con nosotros a través de nuestro sitio web o mediante 
                <span className="nc"> correo electrónico</span>.
                </p>
              </ModalBody>
              <ModalFooter className="ft-modal-nc">
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
