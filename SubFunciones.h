#include "ClasePrimaria.h"

using namespace std;

class Funtion
{
private:
    Contacto ** arreglo;
    int N;
public:

    void agregarContacto(Contacto *obj)
    {
        Contacto** aux = new Contacto * [N + 1];
		for (int i = 0; i < N; i++)
		{
			aux[i] = arreglo[i];
		}
		aux[N] = obj;
		N++;
		if (arreglo != nullptr)

			delete[] arreglo;

		arreglo = aux;
    }

    void mostrar() 
	{
		for (int i = 0; i < N; i++)
		{
			arreglo[i]->toString();
		}
	}

    void eliminarPos(int pos) 
	{
		for (int i = 0; i < N; i++)
		{
			if (i == pos) {
				for (int j =pos; j < N-1; j++)
				{
					arreglo[j] = arreglo[j + 1];
				}
			}
		}
		N--;
	}

    Contacto * modificar(int pos) 
	{
		for (int i = 0; i < N; i++)
		{
			return arreglo[pos];
		}

	}

    //Reportes

    void ReporteCumple()
    {
        for (int i = 0; i< N; i++)
        {
            if (arreglo[i]->GetFechaNacimiento_Mes() == 4 )
            {
                arreglo[i]->toString();
            }
        }
    }

    void ReporteVarones()
    {
        for (int i = 0; i< N; i++)
        {
            if (arreglo[i]->GetSexo() == 'M' )
            {
                arreglo[i]->toString();
            }
        }
    }

    void ReporteRedSocial()
    {
        for (int i = 0; i< N; i++)
        {
            if (arreglo[i]->GetRedSocial() == 'F' ||  arreglo[i]->GetRedSocial() == 'W')
            {
                arreglo[i]->toString();
            }
        }
    }




};