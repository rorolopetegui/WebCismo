<?php
require("class.phpmailer.php");
require("class.smtp.php");

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}


		$nombre = "Rodrigo";

		$email = "rlopetegui@cismosolutions.com";

		$telefono = "091412474";

		$asunto = "Hola como estas?";

		$mensaje = "Un mensaje";


		// Datos de la cuenta de correo utilizada para enviar vía SMTP
		$smtpHost = "smtp.gmail.com";  // Dominio alternativo brindado en el email de alta 
		$smtpUsuario = "rorolopetegui@gmail.com";  // Mi cuenta de correo
		$smtpClave = "102308PelO23RoRo";  // Mi contraseña




		$mail = new PHPMailer();
		$mail->IsSMTP();
		$mail->SMTPAuth = true;
		$mail->Port = 25; 
		$mail->IsHTML(true); 
		$mail->CharSet = "utf-8";

		// VALORES A MODIFICAR //
		$mail->Host = $smtpHost; 
		$mail->Username = $smtpUsuario; 
		$mail->Password = $smtpClave;


		$mail->From = $email; // Email desde donde envío el correo.
		$mail->FromName = $nombre;
		$destinatario = "rorolopetegui@gmail.com";
		$mail->AddAddress($destinatario); // Esta es la dirección a donde enviamos los datos del formulario

		$mail->Subject = "Formulario desde el Sitio Web"; // Este es el titulo del email.
		$mensajeHtml = nl2br($mensaje);

		$mail->Body = "
			<html> 

			<body> 

			<h1>Recibiste un nuevo mensaje desde el formulario de contacto</h1>

			<p>Informacion enviada por el usuario de la web:</p>

			<p>nombre: {$nombre}</p>

			<p>email: {$email}</p>

			<p>telefono: {$telefono}</p>

			<p>asunto: {$asunto}</p>

			<p>mensaje: {$mensaje}</p>

			</body> 

			</html>

			<br />"; // Texto del email en formato HTML
		$mail->AltBody = "{$mensaje} \n\n "; // Texto sin formato HTML
		// FIN - VALORES A MODIFICAR //

		$mail->SMTPOptions = array(
		    'ssl' => array(
		        'verify_peer' => false,
		        'verify_peer_name' => false,
		        'allow_self_signed' => true
		    )
		);

		$estadoEnvio = $mail->Send(); 
		if($estadoEnvio){
		    echo "El correo fue enviado correctamente.";
		} else {
		    echo "Ocurrió un error inesperado.";
		}
	

?>
