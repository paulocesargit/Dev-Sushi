import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Entre em Contato - DevSushi Recife
      </h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            Localização
          </h2>
          <p className="mt-2 text-lg">
            Estamos localizados no coração de Recife! Venha nos visitar e
            experimente o melhor sushi da cidade.
          </p>
          <p className="mt-2 text-lg font-medium">Endereço:</p>
          <p className="text-lg">Boa viagem, Recife - PE</p>
          <p className="mt-2 text-lg font-medium">Horário de Funcionamento:</p>
          <p className="text-lg">Segunda a Sexta: 15:00 - 22:00</p>
          <p className="text-lg">Sábado e Domingo: 12:00 - 23:00</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold flex items-center">
            <FaPhoneAlt className="mr-2" />
            Entre em Contato
          </h2>
          <p className="mt-2 text-lg">
            Tem alguma dúvida ou quer fazer uma reserva? Entre em contato
            conosco!
          </p>
          <p className="mt-2 text-lg font-medium">Telefone:</p>
          <p className="text-lg">(81) 1234-5678</p>
          <p className="mt-2 text-lg font-medium">E-mail:</p>
          <p className="text-lg">contato@devsushi.com</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            Como Chegar
          </h2>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31597.999030791765!2d-34.900746899999994!3d-8.1269282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1fb60ecfb19b%3A0xb442389feeea73be!2sBoa%20Viagem%2C%20Recife%20-%20State%20of%20Pernambuco!5e0!3m2!1sen!2sbr!4v1741753650907!5m2!1sen!2sbr"
              className="w-full h-64 border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
