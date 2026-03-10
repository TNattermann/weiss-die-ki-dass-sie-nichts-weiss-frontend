from io import BytesIO
from datetime import datetime
from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.lib.colors import Color


def create_watermark(width, height, name, date):
    packet = BytesIO()
    c = canvas.Canvas(packet, pagesize=(width, height))

    text = f"Zur Verfügung gestellt an {name} am {date} zur exklusiven Nutzung für edukative Zwecke"

    c.saveState()

    c.setFillColor(Color(0, 0, 1, alpha=0.8))

    c.setFont("Helvetica", 10)

    bottom_margin = 30

    c.drawCentredString(width / 2, bottom_margin, text)

    c.restoreState()

    c.save()
    packet.seek(0)

    return PdfReader(packet).pages[0]


def add_watermark(input_pdf, output_pdf, name, date):
    reader = PdfReader(input_pdf)
    writer = PdfWriter()

    for page in reader.pages:
        width = float(page.mediabox.width)
        height = float(page.mediabox.height)

        watermark = create_watermark(width, height, name, date)

        page.merge_page(watermark)
        writer.add_page(page)

    with open(output_pdf, "wb") as f:
        writer.write(f)


if __name__ == "__main__":

    name = "Max Mustermann"
    date = datetime.today().strftime("%d.%m.%Y")

    add_watermark(
        input_pdf="OpenAccessBook.pdf",
        output_pdf=f"OpenAccessBook_{name}.pdf",
        name=name,
        date=date
    )

    print("Watermark erfolgreich hinzugefügt.")
