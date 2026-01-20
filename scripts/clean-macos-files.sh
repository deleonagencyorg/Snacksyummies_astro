#!/bin/bash

# Script para limpiar archivos de macOS (._* y .DS_Store)
# Uso: ./scripts/clean-macos-files.sh

echo "🧹 Limpiando archivos de macOS..."

# Contar archivos antes de limpiar
echo "📊 Contando archivos a limpiar..."
DOT_UNDERSCORE_COUNT=$(find . -name "._*" -type f | wc -l)
DS_STORE_COUNT=$(find . -name ".DS_Store" -type f | wc -l)

echo "   - Archivos ._: $DOT_UNDERSCORE_COUNT"
echo "   - Archivos .DS_Store: $DS_STORE_COUNT"

# Eliminar archivos ._
if [ $DOT_UNDERSCORE_COUNT -gt 0 ]; then
    echo "🗑️  Eliminando archivos ._*..."
    find . -name "._*" -type f -delete
    echo "✅ Archivos ._* eliminados"
fi

# Eliminar archivos .DS_Store
if [ $DS_STORE_COUNT -gt 0 ]; then
    echo "🗑️  Eliminando archivos .DS_Store..."
    find . -name ".DS_Store" -type f -delete
    echo "✅ Archivos .DS_Store eliminados"
fi

# Verificar que se eliminaron
FINAL_DOT_UNDERSCORE=$(find . -name "._*" -type f | wc -l)
FINAL_DS_STORE=$(find . -name ".DS_Store" -type f | wc -l)

echo ""
echo "🎉 Limpieza completada!"
echo "   - Archivos ._ restantes: $FINAL_DOT_UNDERSCORE"
echo "   - Archivos .DS_Store restantes: $FINAL_DS_STORE"

if [ $FINAL_DOT_UNDERSCORE -eq 0 ] && [ $FINAL_DS_STORE -eq 0 ]; then
    echo "✨ Todos los archivos de macOS han sido eliminados"
else
    echo "⚠️  Algunos archivos no pudieron ser eliminados"
fi
