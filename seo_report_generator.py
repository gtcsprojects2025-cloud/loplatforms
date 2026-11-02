from docx import Document
from docx.shared import Pt
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_PARAGRAPH_ALIGNMENT
from datetime import datetime

def create_seo_report():
    # Create a new Document
    document = Document()
    
    # Set default styling
    styles = document.styles
    styles.font.name = 'Calibri'
    styles.font.size = Pt(11)
    
    # Add title
    title = document.add_heading('SEO Audit & Fixes Summary for LO Platforms', level=0)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    
    # Add date
    document.add_paragraph(f'*Generated on: {datetime.now().strftime("%B %d, %Y")}*', style='Italic')
    
    # 1. Sitemap Issues
    document.add_heading('1. Sitemap Issues (app/sitemap.ts) ✅ FIXED', level=2)
    document.add_paragraph('Problem: The sitemap contained a non-existent /portfolio route')
    document.add_paragraph('Solution: Removed invalid /portfolio entry')
    
    # 2. Footer Links
    document.add_heading('2. Broken Footer Links ✅ FIXED', level=2)
    document.add_paragraph('Problem: Social links pointed to # anchors')
    document.add_paragraph('Solution: Updated with real URLs and accessibility attributes')
    
    # Existing Strengths
    document.add_heading('Existing SEO Strengths ✅', level=1)
    document.add_paragraph('All pages have proper metadata with:')
    features = [
        'Unique titles/descriptions',
        'Open Graph tags',
        'Twitter cards',
        'Proper canonical tags'
    ]
    for feature in features:
        p = document.add_paragraph(f'- {feature}')
    
    # Recommendations
    document.add_heading('Key Recommendations ✅', level=1)
    recommendations = [
        'Add canonical tags to all pages',
        'Optimize images with dimensions',
        'Implement structured data (JSON-LD)',
        'Fix layout.tsx build error',
        'Standardize URL structure with hyphens'
    ]
    
    for idx, rec in enumerate(recommendations, 1):
        document.add_heading(f'{idx}. {rec}', level=2)
        document.add_paragraph('\n- Add implementation details as needed')
    
    # Save the document
    file_path = '/Users/macbookair/Desktop/projects/loplatforms/SEO_Audit_Report_LO_Platforms.docx'
    document.save(file_path)
    print(f"Report created successfully at: {file_path}")
    return file_path

if __name__ == "__main__":
    create_seo_report()
