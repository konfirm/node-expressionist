class Expressionist {
	/**
	 *  Convert capture groups into non-capture groups (`(` to `(?:`)
	 *
	 *  @name    ungroup
	 *  @param   {String}  input
	 *  @return  {String}  ungrouped
	 */
	static ungroup(input) {
		return input.replace(/(\\)?\((?!\?)(.)/g, (_, e, c) => `${e || ''}(${e ? '' : '?:'}${c}`);
	}

	/**
	 *  Escape characters with special meaning in Regular Expression
	 *
	 *  @name    escape
	 *  @param   {String}  input
	 *  @return  {String}  escaped
	 */
	static escape(input) {
		return input.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
	}
}

module.exports = Expressionist;
