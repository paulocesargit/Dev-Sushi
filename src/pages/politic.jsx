import {
  FaShieldAlt,
  FaRegFileAlt,
  FaCookie,
  FaRegEnvelope,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Política de Privacidade - DevSushi
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold flex items-center">
            <FaRegFileAlt className="mr-2" />
            Introdução
          </h2>
          <p className="mt-2 text-lg">
            A sua privacidade é importante para nós. Esta Política de
            Privacidade descreve como coletamos, usamos, protegemos e
            compartilhamos suas informações pessoais quando você visita o nosso
            site, realiza compras ou interage conosco de outras formas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold flex items-center">
            <FaRegFileAlt className="mr-2" />
            Informações Coletadas
          </h2>
          <p className="mt-2 text-lg">Coletamos as seguintes informações:</p>
          <ul className="list-disc pl-6 mt-2 text-lg">
            <li>
              Informações de identificação pessoal, como nome, e-mail e número
              de telefone;
            </li>
            <li>
              Informações de pagamento, como dados de cartões de crédito, quando
              aplicável;
            </li>
            <li>
              Informações de navegação, como seu endereço IP, tipo de
              dispositivo e páginas visitadas;
            </li>
            <li>Qualquer outro dado que você forneça ao interagir conosco.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold flex items-center">
            <FaShieldAlt className="mr-2" />
            Uso das Informações
          </h2>
          <p className="mt-2 text-lg">
            As informações coletadas são utilizadas para:
          </p>
          <ul className="list-disc pl-6 mt-2 text-lg">
            <li>
              Processar pedidos e fornecer os produtos e serviços solicitados;
            </li>
            <li>
              Melhorar a experiência de navegação e oferecer conteúdos
              personalizados;
            </li>
            <li>
              Comunicar promoções, atualizações e outros conteúdos relacionados
              ao DevSushi;
            </li>
            <li>Cumprir obrigações legais e resolver disputas.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold flex items-center">
            <FaShieldAlt className="mr-2" />
            Proteção das Informações
          </h2>
          <p className="mt-2 text-lg">
            Adotamos medidas de segurança adequadas para proteger suas
            informações pessoais contra acessos não autorizados, uso ou
            divulgação. No entanto, nenhum sistema de segurança é completamente
            infalível, e não podemos garantir a segurança absoluta das
            informações transmitidas pela internet.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold flex items-center">
            <FaShieldAlt className="mr-2" />
            Compartilhamento de Informações
          </h2>
          <p className="mt-2 text-lg">
            Não compartilhamos suas informações pessoais com terceiros, exceto
            quando necessário para:
          </p>
          <ul className="list-disc pl-6 mt-2 text-lg">
            <li>
              Processamento de pagamentos através de terceiros confiáveis;
            </li>
            <li>Fornecer suporte ao cliente e serviços necessários;</li>
            <li>
              Cumprir obrigações legais ou quando solicitado por autoridades
              competentes.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold flex items-center">
            <FaCookie className="mr-2" />
            Cookies
          </h2>
          <p className="mt-2 text-lg">
            Utilizamos cookies para melhorar a sua experiência no nosso site.
            Cookies são pequenos arquivos armazenados no seu dispositivo que
            ajudam a lembrar suas preferências e a personalizar o conteúdo. Você
            pode configurar seu navegador para recusar cookies, mas algumas
            funcionalidades do site podem não funcionar corretamente sem eles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold flex items-center">
            <FaShieldAlt className="mr-2" />
            Seus Direitos
          </h2>
          <p className="mt-2 text-lg">
            Você tem o direito de acessar, corrigir ou excluir suas informações
            pessoais armazenadas por nós. Se desejar exercer esses direitos,
            entre em contato conosco através do e-mail:{" "}
            <strong>contato@devsushi.com</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold flex items-center">
            <FaShieldAlt className="mr-2" />
            Alterações nesta Política
          </h2>
          <p className="mt-2 text-lg">
            Podemos atualizar esta Política de Privacidade periodicamente para
            refletir alterações em nossas práticas ou por outras razões
            operacionais, legais ou regulamentares. Recomendamos que você revise
            esta política regularmente para se manter informado sobre como
            estamos protegendo suas informações.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold flex items-center">
            <FaRegEnvelope className="mr-2" />
            Contato
          </h2>
          <p className="mt-2 text-lg">
            Se você tiver alguma dúvida ou preocupação sobre esta Política de
            Privacidade, entre em contato conosco através do e-mail:{" "}
            <strong>contato@devsushi.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
