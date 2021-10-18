GRANT ALL PRIVILEGES ON DATABASE pagina_cultura TO camilofr;

CREATE TYPE type_documento AS ENUM('CC', 'CE', 'CV', 'PA', 'RC', 'TI');
CREATE TYPE type_sexo AS ENUM('M', 'F');
CREATE SEQUENCE participante_seq START 1;
CREATE TABLE IF NOT EXISTS participantes (
  id_participante INT NOT NULL DEFAULT NEXTVAL ('participante_seq'),
  tipo_identificacion type_documento NOT NULL,
  numero_documento VARCHAR(15) NOT NULL,
  primer_nombre VARCHAR(50) NOT NULL,
  segundo_nombre VARCHAR(50) NULL,
  primer_apellido VARCHAR(50) NOT NULL,
  segundo_apellido VARCHAR(50) NULL,
  fecha_nacimiento  DATE NULL,
  sexo type_sexo NOT NULL,
  pais_nacimiento VARCHAR(60) NULL,
  pais_residencia VARCHAR(60) NULL,
  departamento VARCHAR(50) NULL,
  municipio VARCHAR(60) NULL,
  comuna VARCHAR(50) NULL,
  barrio VARCHAR(100) NULL,
  estrato VARCHAR(1) NULL,
  telefono_fijo VARCHAR(20) NULL,
  telefono_celular VARCHAR(20) NULL,
  correo_electronico VARCHAR(100) NULL,
  tipo_participante INT NOT NULL,
  fecha_creacion VARCHAR(45) NULL,
  fecha_modificacion VARCHAR(45) NULL,
  usuario_creacion VARCHAR(45) NULL,
  usuario_modificacion VARCHAR(45) NULL,
  PRIMARY KEY (id_participante)
);


CREATE SEQUENCE participantes_agregados_seq START 1;
CREATE TABLE IF NOT EXISTS participantes_agregados (
  id_participantes INT NOT NULL DEFAULT NEXTVAL ('participantes_agregados_seq'),
  tipo_identificacion type_documento NOT NULL,
  numero_documento VARCHAR(15) NOT NULL,
  mayor_edad BOOLEAN NOT NULL,
  primer_nombre VARCHAR(50) NOT NULL,
  segundo_nombre VARCHAR(50) NULL,
  primer_apellido VARCHAR(50) NOT NULL,
  segundo_apellido VARCHAR(50) NULL,
  rango_edad VARCHAR(10) NULL,
  rol VARCHAR(30) NULL,
  grupo_etnico VARCHAR(30) NULL,
  orientacion_sexual VARCHAR(30) NULL,
  identidad VARCHAR(30) NULL,
  participante_id INT NOT NULL,
  fecha_creacion VARCHAR(45) NULL,
  fecha_modificacion VARCHAR(45) NULL,
  usuario_creacion VARCHAR(45) NULL,
  usuario_modificacion VARCHAR(45) NULL,
  PRIMARY KEY (id_participantes)
);
