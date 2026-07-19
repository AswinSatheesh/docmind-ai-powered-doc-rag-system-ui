import { useState,useEffect } from "react";
import type {Document} from '../types/document';

const MOCK_DOCUMENTS : Document[] = [
        {
            id: 'doc-1',
            name: 'Q3_Financial_Report.pdf',
            uploadDate: '2026-07-10',
            fileSize: '2.4 MB',
            status: 'Processed',
            summary: 'Q3 revenue saw a 14% year-over-year increase, driven primarily by enterprise software subscription spikes. Operating margins held stable at 28%. Key headwinds include increased international supply-chain logistics costs.'
        },
        {
            id: 'doc-2',
            name: 'PTE_Academic_Exam_Blueprint.pdf',
            uploadDate: '2026-07-15',
            fileSize: '1.1 MB',
            status: 'Processed',
            summary: 'Comprehensive analysis of the PTE test sections. Highlights scoring algorithms across Speaking & Writing, Reading, and Listening modules. Recommends focusing heavily on "Read Aloud" and "Write from Dictation" items for maximal integrated score weights.'
        },
        {
            id: 'doc-3',
            name: 'Employee_Handbook_2026.pdf',
            uploadDate: '2026-07-18',
            fileSize: '4.8 MB',
            status: 'Processing',
            summary: 'AI is currently analyzing this document. Summary will be generated automatically upon extraction completions.'
        }
    ];

export const Dashboard =() =>{
    // Track which document is selected for detail viewing
    const[selectedDocId,setSelectedDocId] = useState<string>(MOCK_DOCUMENTS[0].id);
    
    // Find the full object details of the currently clicked document
    const currentDoc = MOCK_DOCUMENTS.find(doc => doc.id === selectedDocId);

    return(
        <>
            {/* // 📦 Parent Container: Holds our columns */}
            <div style={{display : 'flex', gap: '2rem',height: 'calc(100vh -120px)'}}>
                {/* //left side : File Manager Navigation */}
                <div  style={{
                    flex:'1',background: 'white',
                    borderRadius: '8px',
                    padding: '1.5rem',boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    display: 'flex',flexDirection: 'column',
                    gap: '1rem'}}>

                    <h3 style={{ margin: 0, color: '#1e293b' }}>Your Documents</h3>
                    <hr style={{ border: '0', borderTop: '1px solid #e2e8f0', margin: '0' }}/>
                    
                    {/* left side each document box */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', overflowY: 'auto' }}>
                        {MOCK_DOCUMENTS.map((doc)=>{
                            const isSelected = doc.id === selectedDocId;
                            return(
                                <button 
                                    key={doc.id} 
                                    onClick={()=> setSelectedDocId(doc.id)}
                                    style={{
                                        textAlign: 'left',
                                        padding: '1rem',
                                        borderRadius: '6px',
                                        border: isSelected ? '2px solid #2563eb' : '1px solid #e2e8f0',
                                        background: isSelected ? '#eff6ff' : '#ffffff',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        }}
                                    > 
                                    
                                    <div style={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '0.25rem' }}>{doc.name}</div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#64748b' }}>
                                        <span>{doc.fileSize}</span>
                                        <span style={{ 
                                            color: doc.status === 'Processed' ? '#16a34a' : doc.status === 'Processing' ? '#d97706' : '#dc2626',
                                            fontWeight: '600'
                                        }}>
                                            {doc.status}
                                        </span>
                                    </div>
                                    
                                    </button>
                            )
                                
                        })}   
                    </div>

                </div>

                {/* right side */}
                <div style={{
                    flex:'2',
                    background: 'white',    
                    borderRadius: '8px',
                    padding: '2rem',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    display : 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                    }}>
                           {currentDoc ? (
                                // 🟢 True Condition: A document is selected! Show details.
                                <>
                                <div>
                                    <h2 style={{ margin: '0 0 0.5rem 0', color: '#1e293b' }}>{currentDoc.name}</h2>
                                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8' }}>
                                        Uploaded on : <strong>{currentDoc.uploadDate}</strong> | File weight: <strong>{currentDoc.fileSize}</strong>
                                    </p>
                                </div>
                                <hr style={{ border: '0', borderTop: '1px solid #e2e8f0', margin: '0' }} />

                                <div>
                                    <h4 style={{margin: '0 0 0.75rem 0', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em'}}>AI Generated Insights summary</h4>
                                    <div style={{
                                        background: '#f8fafc',
                                        padding: '1.5rem',
                                        borderRadius : '6px',
                                        lineHeight: '1.6',
                                        color: '#334155',
                                        borderLeft: '4px solid #2563eb'
                                    }}>
                                        {currentDoc.summary}
                                    </div>
                                </div>
                                </>
                           ) : (
                            // 🔴 False Condition: No document selected. Show fallback message.
                                <div style={{textAlign: 'center',color: '#94a3b8', marginTop: '4rem'}}>
                                    Select a document from the left panel to review its structural contents.
                                </div>
                           )}
                </div>
            </div>
        </>
    );
};