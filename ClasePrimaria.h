#include <iostream>
#include <string>
using namespace std;

class Contacto
{
private:
    string NameContacto;
    int Telefono;
    char Sexo;
    string Facultad;
    int FechaNacimiento_Dia;
    int FechaNacimiento_Mes;
    int FechaNacimiento_Año;
    string Email;
    char RedSocial;
public:

    Contacto(string _NameContacto, int _Telefono,char _Sexo, string _Facultad, 
    int _FechaNacimiento_Dia, int _FechaNacimiento_Mes, int _FechaNacimiento_Año, 
    string _Email, char _RedSocial )
    {
        NameContacto = _NameContacto;
        Telefono = _Telefono;
        Sexo = _Sexo;
        Facultad = _Facultad;
        FechaNacimiento_Año = _FechaNacimiento_Año;
        FechaNacimiento_Mes = _FechaNacimiento_Mes;
        FechaNacimiento_Dia = _FechaNacimiento_Dia;
        Email = _Email;
        RedSocial = _RedSocial;
    }
    ~Contacto() {}

    //get
    string GetNameContacto()
    {
        return NameContacto;;
    }
    int GetTelefono()
    {
        return Telefono;
    }
    char GetSexo()
    {
        return Sexo;
    }
    string GetFacultad()
    {
        return Facultad;
    }
    int GetFechaNacimiento_Dia()
    {
        return FechaNacimiento_Dia;
    }
    int GetFechaNacimiento_Mes()
    {
        return FechaNacimiento_Mes;
    }
    int GetFechaNacimiento_Año()
    {
        return FechaNacimiento_Año;
    }
    string GetEmail()
    {
        return Email;
    }
    char GetRedSocial()
    {
        return RedSocial;
    }

    //set
    void SetNameContacto(string n)
    {
        NameContacto = n;
    }
    void SetTelefono(int t)
    {
        Telefono = t;
    }
    void SetSexo(char s)
    {
        Sexo = s;
    }
    void SetFacultad(string f)
    {
        Facultad = f;
    }
    void SetFechaNacimiento_Dia(int fd)
    {
        FechaNacimiento_Dia = fd;
    }
    void SetFechaNacimiento_Mes(int f_m)
    {
        FechaNacimiento_Mes = f_m;
    }
    void SetFechaNacimiento_Año(int f_a)
    {
        FechaNacimiento_Año = f_a;
    }
    void SetEmail(string e)
    {
        Email = e;
    }
    void SetRedSocial(char r)
    {
        RedSocial = r;
    }

    void toString() {
		cout << "Nombre: " << NameContacto << "\t";
		cout << "Telefono: " << Telefono << "\t";
        Sexo = toupper(Sexo);
        if (Sexo == 'M')
        {
            cout << "Sexo: " << "Masculino" << "\t";
        }else{
            cout << "Sexo: " << "Femenino" << "\t";
        }
        cout << "Facultad: " << Facultad << "\t";
        cout << "Fecha de Nacimiento: " << FechaNacimiento_Dia <<"/"<<FechaNacimiento_Mes<<"/"<<FechaNacimiento_Año << "\t";
        cout << "Email: " << Email << "\t";
        RedSocial = toupper(RedSocial);
        switch (RedSocial)
        {
            case 'F': cout << "Mi Red Social es: " << RedSocial << "\t";
            case 'I': cout << "Mi Red Social es: " << RedSocial << "\t";
            case 'W': cout << "Mi Red Social es: " << RedSocial << "\t";
            case 'D': cout << "Mi Red Social es: " << RedSocial << "\t";
            case 'T': cout << "Mi Red Social es: " << RedSocial << "\t";
            case 'Y': cout << "Mi Red Social es: " << RedSocial << "\t";
            default : "No tiene Red Social";
        }
        
		
		
	}
};