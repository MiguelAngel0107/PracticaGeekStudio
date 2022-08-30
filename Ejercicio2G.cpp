#include "SubFunciones.h"
#include <conio.h>

using namespace std;
int Menu() {

	int op;
	do {
		cout << " Menu de Opciones " << endl;
		cout << "1.- Registrar Contacto" << endl;
		cout << "2.- Mostrar Registro de Contacto " << endl;
		cout << "3.- Modificar un Registro de Contacto " << endl;
		cout << "4.- Eliminar Un Registro de Contacto" << endl;
		cout << "5.- Reporte de Contactos que cumplen años en Mayo" << endl;
		cout << "6.- Reporte de Contactos que son Varones" << endl;
		cout << "7.- Reporte de Contactos que tiene WhatsApp y Facebook" << endl;
		cout << "8.- Salir " << endl;
		cout << " Ingrese opcion: "; cin >> op;
	} while (op < 1 || op> 8);

	return op;
}

int main()
{
	Funtion* objArreglo = new Funtion();
	Contacto* objContacto;
	string NameContacto;
    int Telefono;
    char Sexo;
    string Facultad;
    int FechaNacimiento_Dia;
    int FechaNacimiento_Mes;
    int FechaNacimiento_Año;
    string Email;
    char RedSocial;

	while (true)
	{
		system("cls");
		int op;

		op = Menu();

		if (op == 1)
		{
			objContacto = new Contacto(NameContacto,Telefono,Sexo,Facultad,FechaNacimiento_Dia,FechaNacimiento_Mes,FechaNacimiento_Año,Email,RedSocial);
			cout << "  nombre del contacto: "; cin >> NameContacto;
			objContacto->SetNameContacto(NameContacto);

			cout << " Telefono: "; cin >> Telefono;
			objContacto->SetTelefono(Telefono);

			cout << " Sexo: "; cin >> Sexo;
			objContacto->SetSexo(Sexo);

			cout << " Facultad: "; cin >> Facultad;
			objContacto->SetFacultad(Facultad);

            cout << " Dia de su Cumpleaños "; cin >> FechaNacimiento_Dia;
            objContacto->SetFechaNacimiento_Dia(FechaNacimiento_Dia);

            cout << " Mes de su Cumpleaños "; cin >> FechaNacimiento_Mes;
            objContacto->SetFechaNacimiento_Mes(FechaNacimiento_Mes);

            cout << " Año de su Cumpleaños "; cin >> FechaNacimiento_Año;
            objContacto->SetFechaNacimiento_Año(FechaNacimiento_Año);

			cout << " Email: "; cin >> Email;
			objContacto->SetEmail(Email);

			cout << " Red Social: "; cin >> RedSocial;
			objContacto->SetRedSocial(RedSocial);


			objArreglo->agregarContacto(objContacto);


		}
		if (op == 2)
		{
			objArreglo->mostrar();
		}

		if (op == 3)
		{
			int pos;
			int opcionM;
			cout << "Ingrese la poscion  que desee Modificar "; cin >> pos;
			Contacto* objContacto = objArreglo->modificar(pos);
			string NameContacto;
            int Telefono;
            char Sexo;
            string Facultad;
            int FechaNacimiento_Dia;
            int FechaNacimiento_Mes;
            int FechaNacimiento_Año;
            string Email;
            char RedSocial;

			cout << "Que desea Modificar del Objeto: " << endl;
			cout << " 1 .- Nombre del Contacto " << endl;
			cout << " 2 .- Telefono del Contacto " << endl;
			cout << " 3 .- Sexo del Contacto" << endl;
			cout << " 4 .- Facultad del Contacto " << endl;
			cout << " 5 .- Email del Contacto " << endl;
			cout << " 6 .- Red Social del Contacto " << endl;
            cout << " 7 .- Dia de Nacimiento del Contacto " << endl;
            cout << " 8 .- Mes de Nacimiento del Contacto " << endl;
            cout << " 9 .- Año de Nacimiento del Contacto " << endl;
			cin >> opcionM;

			switch (opcionM)
			{
			case 1:

				cout << "  Nombre del contacto  : (" << objContacto->GetNameContacto() << ") :"; cin >> NameContacto;
				objContacto->SetNameContacto(NameContacto);
				break;
			case 2:

				cout << " Telefono del Contacto  : (" << objContacto->GetTelefono() << ") :"; cin >> Telefono;
				objContacto->SetTelefono(Telefono);
				break;
			case 3:

				cout << " Sexo del Contacto : (" << objContacto->GetSexo() << ") :"; cin >> Sexo;
				objContacto->SetSexo(Sexo);
		
			case 4:

				cout << " Facultad del Contacto : (" << objContacto->GetFacultad() << ") :"; cin >> Facultad;
				objContacto->SetFacultad(Facultad);
				break;
			case 5:

				cout << " Email del Contacto : (" << objContacto->GetEmail() << ") :"; cin >> Email;
				objContacto->SetEmail(Email);
				break;
			case 6:

				cout << " Red Social del Contacto : (" << objContacto->GetRedSocial() << ") :"; cin >> RedSocial;
				objContacto->SetRedSocial(RedSocial);
				break;

			case 7:
                
                cout << " Dia de Nacimiento del Contacto : (" << objContacto->GetFechaNacimiento_Dia() << ") :"; cin >> FechaNacimiento_Dia;
				objContacto->SetFechaNacimiento_Dia(FechaNacimiento_Dia);
				break;
            case 8:
                
                cout << " Mes de Nacimiento del Contacto : (" << objContacto->GetFechaNacimiento_Mes() << ") :"; cin >> FechaNacimiento_Mes;
				objContacto->SetFechaNacimiento_Mes(FechaNacimiento_Mes);
				break;
            case 9:
                
                cout << " Año de Nacimiento del Contacto : (" << objContacto->GetFechaNacimiento_Año() << ") :"; cin >> FechaNacimiento_Año;
				objContacto->SetFechaNacimiento_Año(FechaNacimiento_Año);
				break;

			default:
				cout << " Ha digitado un numero invalido " << endl;
				break;
			}


		}

		if (op == 4)
		{

			int pos;

			cout << "Ingrese la poscion que desee Eliminar: "; cin >> pos;
			objArreglo->eliminarPos(pos);

		}

		if (op == 5)
		{

			objArreglo->ReporteCumple();
		}

		if (op == 6)
		{

			objArreglo->ReporteVarones();

		}

		if (op == 7)
		{
			objArreglo->ReporteRedSocial();
		}
		if (op == 8)
		{
			return 0;
		}


		_getch();
	};
}