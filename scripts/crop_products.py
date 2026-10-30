#!/usr/bin/env python3
import subprocess
import os

# We can find photo rectangles or define clean crops for each product image:
# doc1_page_01 -> Exprimidor de limón
# doc1_page_03 -> Pimentero de madera
# doc1_page_05 -> Calentador de mamadera
# doc1_page_06 -> Pimentero de acrílico
# doc1_page_08 -> Irrigador bucal
# doc1_page_10 -> Jarra de vidrio
# doc2_page_01 -> Canasta matera marrón
# doc2_page_02 -> Canasta matera negra
# doc2_page_03 -> Canasta matera cuero grande / caramelo
# doc2_page_04 -> Pava eléctrica Matecit
# doc2_page_05 -> Mates con decoración dorada
# doc2_page_06 -> Mini copas de vidrio x6

crops = [
    # exprimidor de limón: middle photo without top/bottom text
    {
        "input": "public/products/doc1_page_01.png",
        "output": "public/products/exprimidor_limon.jpg",
        "crop": "940x1240+151+305"
    },
    # pimentero de madera: crop removing top black bar and margins
    {
        "input": "public/products/doc1_page_03.png",
        "output": "public/products/pimentero_madera.jpg",
        "crop": "940x1100+151+550"
    },
    # calentador de mamadera: crop removing top black bar and margins
    {
        "input": "public/products/doc1_page_05.png",
        "output": "public/products/calentador_mamadera.jpg",
        "crop": "940x1100+151+550"
    },
    # pimentero de acrilico: photo without top text
    {
        "input": "public/products/doc1_page_06.png",
        "output": "public/products/pimentero_acrilico.jpg",
        "crop": "940x1280+151+305"
    },
    # irrigador bucal: photo without top black bar and margins
    {
        "input": "public/products/doc1_page_08.png",
        "output": "public/products/irrigador_bucal.jpg",
        "crop": "940x1100+151+550"
    },
    # jarra de vidrio: photo without top black bar and margins
    {
        "input": "public/products/doc1_page_10.png",
        "output": "public/products/jarra_vidrio.jpg",
        "crop": "940x1180+151+480"
    },
    # canasta matera marron
    {
        "input": "public/products/doc2_page_01.png",
        "output": "public/products/canasta_matera_marron.jpg",
        "crop": "940x940+151+270"
    },
    # canasta matera negra
    {
        "input": "public/products/doc2_page_02.png",
        "output": "public/products/canasta_matera_negra.jpg",
        "crop": "940x1050+151+270"
    },
    # canasta matera caramelo / grande
    {
        "input": "public/products/doc2_page_03.png",
        "output": "public/products/canasta_matera_caramelo.jpg",
        "crop": "940x1050+151+270"
    },
    # pava electrica matecit
    {
        "input": "public/products/doc2_page_04.png",
        "output": "public/products/pava_electrica_matecit.jpg",
        "crop": "940x1080+151+270"
    },
    # mate decoracion dorada
    {
        "input": "public/products/doc2_page_05.png",
        "output": "public/products/mate_decoracion_dorada.jpg",
        "crop": "940x1240+151+270"
    },
    # mini copas de vidrio
    {
        "input": "public/products/doc2_page_06.png",
        "output": "public/products/mini_copas_vidrio.jpg",
        "crop": "940x1100+151+550"
    }
]

os.makedirs("public/products", exist_ok=True)

for item in crops:
    cmd = [
        "convert",
        item["input"],
        "-crop", item["crop"],
        "+repage",
        "-quality", "90",
        "-resize", "800x800^",
        item["output"]
    ]
    print("Running:", " ".join(cmd))
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print("Error:", res.stderr)
    else:
        print(f"Created {item['output']}")

print("All crops completed successfully.")
