import React, { useState } from 'react';
import { X, Info, ChevronDown, Calendar, Bold, Italic, Underline, Type, AlignLeft, AlignCenter, List, Link, Image, Download } from 'lucide-react';

export default function DocumentCreator() {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [documentDate, setDocumentDate] = useState('');
  const [contractText, setContractText] = useState(`Contract Text. This Contract has been made out in four (4) originals for Party A and Party B each holding two (2), which shall be equally authentic. During the valid credit period and within the credit line, all the legal documents concerning the creditor and debtor relationship between Party A and Party B shall be deemed as an integral part of this Contract.`);

  const documentSections = [
    'Court Address',
    'Contractor signature', 
    'Personal data of subcontractor'
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl h-[90vh] flex overflow-hidden">
        
        {/* Left Panel - Form */}
        <div className="w-1/2 p-6 overflow-y-auto">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Create New Document</h1>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Info Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800">
              On the document preview, the signature line always shows the ordering activity data, even if a later signature is made as part of the contract signing.
            </p>
          </div>

          {/* Document Template */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Document template
            </label>
            <div className="relative">
              <select 
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="">Select predefined template</option>
                <option value="contract">Standard Contract</option>
                <option value="agreement">Service Agreement</option>
                <option value="nda">Non-Disclosure Agreement</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Document Sections and Postage */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            
            {/* Document Sections */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Document sections
              </label>
              <div className="space-y-2">
                {documentSections.map((section, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full mr-2 mb-2"
                  >
                    {section}
                    <X className="w-3 h-3 ml-2 cursor-pointer hover:text-gray-900" />
                  </span>
                ))}
              </div>
            </div>

            {/* Postage of Document */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Postage of document
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={documentDate}
                  onChange={(e) => setDocumentDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="dd/mm/yyyy"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Introduction Text */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Introduction text
            </label>
            
            {/* Toolbar */}
            <div className="border border-gray-300 rounded-t-lg bg-gray-50 p-2 flex items-center gap-1">
              <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                <Bold className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                <Italic className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                <Underline className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                <Type className="w-4 h-4" />
              </button>
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
              <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                <AlignLeft className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                <AlignCenter className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                <List className="w-4 h-4" />
              </button>
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
              <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                <Link className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                <Image className="w-4 h-4" />
              </button>
            </div>
            
            {/* Text Area */}
            <textarea
              value={contractText}
              onChange={(e) => setContractText(e.target.value)}
              className="w-full p-4 border-l border-r border-b border-gray-300 rounded-b-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[150px] resize-none"
              placeholder="Enter your contract text here..."
            />
          </div>

          {/* Download Options */}
          <div className="flex items-center gap-3 mb-6">
            <Download className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-600">Download copy for individual edition as</span>
            <div className="relative">
              <select className="px-3 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
                <option>PDF</option>
                <option>Word</option>
                <option>HTML</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              Create document
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="w-1/2 bg-gray-50 p-6 border-l border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Document preview</h2>
            <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
              100%
            </button>
          </div>
          
          {/* Document Preview */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full overflow-y-auto">
            <div className="text-xs text-gray-500 mb-4 text-right">
              Contract: 19.12.2023
            </div>
            
            <div className="space-y-4">
              <div className="text-sm">
                <div className="font-medium">Sun Star International LLC</div>
                <div className="text-gray-600">
                  789 Maple St. Suite 101<br/>
                  Delaware 19735
                </div>
              </div>
              
              <div className="text-sm">
                <div className="font-medium">Wilson Enterprises LLC</div>
                <div className="text-gray-600">
                  4572 Washington Ave Santa Ana<br/>
                  Texas 99345
                </div>
              </div>
              
              <div className="my-8">
                <h3 className="font-semibold text-center mb-4">Agreement</h3>
                <div className="text-sm leading-relaxed text-justify">
                  Contract Text. This Contract has been made out in four (4) originals for Party A and Party B each holding two (2), which shall be equally authentic. During the valid credit period and within the credit line, all the legal documents concerning the creditor and debtor relationship between Party A and Party B shall be deemed as an integral part of this Contract.
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-8">
                <div className="text-sm text-gray-600">Contractor signature</div>
                <div className="h-12 border-b border-gray-300 mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}