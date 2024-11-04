CREATE DATABASE TURNOS
GO
USE TURNOS
GO
CREATE TABLE TURNOS(
	ID_TURNO INT IDENTITY(1,1),
	FECHA DATE,
	NOMBRE VARCHAR(100),
	APELLIDO VARCHAR(100),
	CONSTRAINT PK_TURNOS PRIMARY KEY (ID_TURNO)
)
