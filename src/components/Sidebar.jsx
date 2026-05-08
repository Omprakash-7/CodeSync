import React from 'react';
import { FileText, Settings, FolderPlus, FilePlus } from 'lucide-react';

const Sidebar = ({ files, activeFile, setActiveFile, onCreateFile }) => {
    return (
        <>
            <aside className="icon-sidebar glass">
                <div className="icon active"><FileText size={22} /></div>
                <div className="icon-bottom icon"><Settings size={22} /></div>
            </aside>

            <aside className="explorer glass">
                <div className="exp-header">
                    <span>EXPLORER</span>
                    <div className="exp-icons">
                        <FolderPlus size={16} className="pointer" />
                        <FilePlus size={16} onClick={onCreateFile} className="pointer" />
                    </div>
                </div>
                <div className="file-tree">
                    {files.map(f => (
                        <div
                            key={f.name}
                            className={`tree-item ${activeFile === f.name ? 'active-f' : ''}`}
                            onClick={() => f.type === 'file' && setActiveFile(f.name)}
                        >
                            {f.type === 'folder' ? '📁' : <FileText size={14} opacity="0.6" />}
                            <span>{f.name}</span>
                        </div>
                    ))}
                </div>
            </aside>
        </>
    );
};

export default Sidebar;