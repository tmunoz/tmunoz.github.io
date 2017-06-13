#include <iostream>
#include <fstream>
#include <stdlib.h>
#include <time.h>

using namespace std;

int main(){
    ofstream out("data.txt");
    srand(time(NULL));
    for(int i=0;i<1000000;i++){
        int rut,plata;
        rut=rand()%1000000;
        plata=rand()%10000000;
        out<<"<li>"<<rut<<" "<<plata<<"</li>\n";
    }
    out.close();
}
