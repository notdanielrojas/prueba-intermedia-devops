# Proyecto CloudTask: Soluciones de Escalabilidad en la Nube

Este proyecto aborda los desafíos de escalabilidad de CloudTask, una empresa SaaS en rápido crecimiento, mediante la implementación de soluciones en la nube de AWS. A continuación, se detalla cada ejercicio con sus respectivas soluciones:

## Ejercicio 1: Migración de un Servicio Legacy a EC2

**Objetivo:** Migrar un servicio legacy crítico a una instancia EC2 con monitoreo en tiempo real.

**Solución:**

1. **Crear una instancia EC2:** Se creó una instancia EC2 utilizando una AMI personalizada de Ubuntu 22.04 para asegurar la compatibilidad con el servicio legacy. Se configuró el tipo de instancia como t2.micro para cumplir con los requisitos del servicio.
2. **Configurar un grupo de seguridad:** Se configuró un grupo de seguridad que permite la conexión SSH solo desde la IP pública del administrador (mi IP pública) y el acceso HTTP/HTTPS desde cualquier lugar para asegurar el acceso al servicio.
3. **Configurar CloudWatch:** Se configuraron las siguientes métricas y alarmas en CloudWatch:
    * **Uso de CPU:** Se configuró una alarma para que se active cuando el uso de CPU sea mayor al 75% durante 5 minutos consecutivos.
    * **Espacio de almacenamiento:** Se configuró una alarma para que se active cuando el espacio de almacenamiento disponible sea menor al 20% durante 3 períodos consecutivos de 5 minutos.

**Evidencias:**

* [Imagen de la instancia EC2 creada]
* [Imagen del grupo de seguridad configurado]
* [Imagen de las alarmas de CloudWatch configuradas]


## Ejercicio 2: Despliegue Automatizado en ECS

**Objetivo:** Automatizar el despliegue continuo de una nueva API basada en microservicios.

**Solución:**

1. **Crear un clúster ECS:** Se creó un clúster ECS llamado "cluster-prueba-intermedia" con una capacidad de 1 instancia EC2 t2.micro.
2. **Configurar un servicio ECS:** Se configuró un servicio ECS llamado "servicio-prueba-intermedia" que utiliza el clúster creado anteriormente. El servicio se configuró para ejecutar una tarea que ejecuta la API. Se configuró un balanceador de carga para permitir el acceso a la API.
3. **Implementar un pipeline de CI/CD:** Se implementó un pipeline de CI/CD utilizando GitHub Actions que realiza las siguientes acciones:
    * Construye una imagen Docker de la API.
    * Empuja la imagen Docker a un repositorio de contenedores (Amazon ECR).
    * Despliega la nueva imagen Docker en el servicio ECS.

**Evidencias:**

* [Imagen del clúster ECS creado]
* [Imagen del servicio ECS configurado]
* [Imagen del pipeline de CI/CD en GitHub Actions]
* URL del balanceador de carga que permite acceder a la API: [inserta la URL aquí]


## Ejercicio 3: Procesamiento de Eventos con Lambda, SNS y SQS

**Objetivo:** Implementar un sistema serverless para gestionar notificaciones y procesamiento de eventos internos.

**Solución:**

1. **Configurar una cola SQS:** Se configuró una cola SQS llamada "sqs-prueba-intermedia" para recibir mensajes JSON con información de eventos (como la creación de nuevos usuarios).
2. **Crear una función Lambda:** Se creó una función Lambda llamada "lambda-prueba-intermedia" que realiza las siguientes acciones:
    * Lee los mensajes de la cola SQS.
    * Envía una notificación al equipo administrativo a través de un tema SNS.
3. **Configurar un tema SNS:** Se configuró un tema SNS llamado "topico-prueba-intermedia" con dos suscriptores:
    * Una dirección de correo electrónico.
    * Una función Lambda que imprime el mensaje recibido en la consola.


## Entregables

* **Documentación detallada:** Este README.md proporciona una descripción detallada de los pasos realizados, capturas de pantalla y justificación de las configuraciones.
* **Repositorio de GitHub:** Este repositorio contiene el código fuente de la API, la configuración del pipeline de CI/CD y la función Lambda.
* **Evidencias:** Se han proporcionado capturas de pantalla de las configuraciones de AWS y pruebas funcionales que demuestran el éxito de la solución implementada.
